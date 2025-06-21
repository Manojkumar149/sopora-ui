
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export interface Training {
  id: string;
  sop_id: string;
  user_id: string;
  assigned_by: string;
  assigned_at: string;
  due_date?: string;
  started_at?: string;
  completed_at?: string;
  status: 'assigned' | 'in_progress' | 'completed' | 'overdue';
}

export interface CreateTrainingData {
  sop_id: string;
  user_id: string;
  due_date?: string;
}

export interface UpdateTrainingData {
  due_date?: string;
  status?: 'assigned' | 'in_progress' | 'completed' | 'overdue';
}

export const useTrainings = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    data: trainings,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['trainings'],
    queryFn: async () => {
      const response = await apiClient.get<Training[]>('/trainings/');
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data || [];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: CreateTrainingData) => {
      const response = await apiClient.post<Training>('/trainings/', data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainings'] });
      toast({
        title: "Success",
        description: "Training assigned successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to assign training',
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateTrainingData }) => {
      const response = await apiClient.patch<Training>(`/trainings/${id}`, data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainings'] });
      toast({
        title: "Success",
        description: "Training updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to update training',
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/trainings/${id}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainings'] });
      toast({
        title: "Success",
        description: "Training deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to delete training',
        variant: "destructive",
      });
    },
  });

  return {
    trainings: trainings || [],
    isLoading,
    error,
    refetch,
    createTraining: createMutation.mutate,
    updateTraining: updateMutation.mutate,
    deleteTraining: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
