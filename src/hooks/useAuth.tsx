
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  tenant_id: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
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
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const isAuthenticated = !!user;

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const response = await fetch('https://sopora-backend.onrender.com/auth/login', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data: LoginResponse = await response.json();
      localStorage.setItem('auth_token', data.access_token);
      setUser(data.user);
      
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Login failed',
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
      const response = await apiClient.post<LoginResponse>('/auth/register', userData);
      
      if (response.error) {
        throw new Error(response.error);
      }

      if (response.data) {
        localStorage.setItem('auth_token', response.data.access_token);
        setUser(response.data.user);
        
        toast({
          title: "Success",
          description: "Account created successfully",
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Registration failed',
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      setUser(null);
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
    }
  };

  const refreshUser = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiClient.get<User>('/users/me');
      if (response.data) {
        setUser(response.data);
      } else {
        localStorage.removeItem('auth_token');
      }
    } catch (error) {
      console.error('Failed to refresh user:', error);
      localStorage.removeItem('auth_token');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const value: AuthContextType = {
    user,
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
