
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  tenant_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateUserData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface UpdateUserData {
  email?: string;
  first_name?: string;
  last_name?: string;
  is_active?: boolean;
}

export const useUsers = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await apiClient.get<User[]>('/users/');
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data || [];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateUserData }) => {
      const response = await apiClient.patch<User>(`/users/${id}`, data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to update user',
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/users/${id}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Success",
        description: "User deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to delete user',
        variant: "destructive",
      });
    },
  });

  return {
    users: users || [],
    isLoading,
    error,
    refetch,
    updateUser: updateMutation.mutate,
    deleteUser: deleteMutation.mutate,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};

export const useUser = (userId: string) => {
  const {
    data: user,
    isLoading,
    error
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await apiClient.get<User>(`/users/${userId}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    enabled: !!userId,
  });

  return {
    user,
    isLoading,
    error,
  };
};
