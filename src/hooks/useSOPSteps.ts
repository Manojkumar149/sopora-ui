
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { SOPStep } from './useSops';

export interface CreateSOPStepData {
  sop_id: string;
  step_order: number;
  content_type: string;
  content_data: string;
}

export interface UpdateSOPStepData {
  step_order?: number;
  content_type?: string;
  content_data?: string;
}

export const useSOPSteps = (sopId?: string) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    data: steps,
    isLoading,
    error
  } = useQuery({
    queryKey: ['sop-steps', sopId],
    queryFn: async () => {
      const response = await apiClient.get<SOPStep[]>(`/api/v1/sop-steps/?sop_id=${sopId}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data || [];
    },
    enabled: !!sopId,
  });

  const createMutation = useMutation({
    mutationFn: async (data: CreateSOPStepData) => {
      const response = await apiClient.post<SOPStep>('/api/v1/sop-steps/', data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sop-steps', sopId] });
      toast({
        title: "Success!",
        description: "Step created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to create step',
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateSOPStepData }) => {
      const response = await apiClient.patch<SOPStep>(`/api/v1/sop-steps/${id}`, data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sop-steps', sopId] });
      toast({
        title: "Success!",
        description: "Step updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to update step',
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/api/v1/sop-steps/${id}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sop-steps', sopId] });
      toast({
        title: "Success!",
        description: "Step deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to delete step',
        variant: "destructive",
      });
    },
  });

  return {
    steps: steps || [],
    isLoading,
    error,
    createStep: createMutation.mutate,
    updateStep: updateMutation.mutate,
    deleteStep: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
