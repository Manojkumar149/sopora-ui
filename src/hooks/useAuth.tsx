
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  tenant_id: string;
  created_at: string;
}

interface Tenant {
  id: string;
  name: string;
  domain?: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  tenant: Tenant | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: string;
  tenant_name?: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const isAuthenticated = !!user;

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const response = await apiClient.postForm<LoginResponse>('/api/v1/auth/login', formData);

      if (response.error) {
        throw new Error(response.error);
      }

      if (response.data) {
        localStorage.setItem('auth_token', response.data.access_token);
        localStorage.setItem('user_data', JSON.stringify(response.data.user));
        setUser(response.data.user);
        
        // Fetch tenant data
        await fetchTenant(response.data.user.tenant_id);
        
        toast({
          title: "Welcome back!",
          description: "Successfully logged in to SOPora",
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : 'Invalid credentials',
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    try {
      // First create tenant if tenant_name is provided
      let tenantId = null;
      if (userData.tenant_name) {
        const tenantResponse = await apiClient.post<Tenant>('/api/v1/tenants/', {
          name: userData.tenant_name,
        });
        
        if (tenantResponse.error) {
          throw new Error(tenantResponse.error);
        }
        
        if (tenantResponse.data) {
          tenantId = tenantResponse.data.id;
          setTenant(tenantResponse.data);
        }
      }

      // Create user
      const userPayload = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role || 'user',
      };

      const endpoint = tenantId 
        ? `/api/v1/users/?tenant_id=${tenantId}`
        : '/api/v1/users/';
        
      const response = await apiClient.post<User>(endpoint, userPayload);
      
      if (response.error) {
        throw new Error(response.error);
      }

      if (response.data) {
        // Auto-login after successful registration
        return await login(userData.email, userData.password);
      }
      
      return false;
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : 'Failed to create account',
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTenant = async (tenantId: string) => {
    try {
      const response = await apiClient.get<Tenant>(`/api/v1/tenants/${tenantId}`);
      if (response.data) {
        setTenant(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch tenant:', error);
    }
  };

  const logout = async () => {
    try {
      await apiClient.post('/api/v1/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      setUser(null);
      setTenant(null);
      toast({
        title: "Goodbye!",
        description: "Successfully logged out",
      });
    }
  };

  const refreshUser = async () => {
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');
    
    if (!token || !userData) {
      setIsLoading(false);
      return;
    }

    try {
      const user = JSON.parse(userData);
      setUser(user);
      await fetchTenant(user.tenant_id);
    } catch (error) {
      console.error('Failed to refresh user:', error);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const value: AuthContextType = {
    user,
    tenant,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
