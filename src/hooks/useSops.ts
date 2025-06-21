
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export interface SOP {
  id: string;
  title: string;
  description: string;
  version: number;
  tenant_id: string;
  created_by: string;
  created_at: string;
  updated_at: string | null;
}

export interface SOPStep {
  id: string;
  sop_id: string;
  step_order: number;
  content_type: string;
  content_data: string;
  tenant_id: string;
}

export interface CreateSOPData {
  title: string;
  description?: string;
  version?: number;
  created_by: string;
}

export interface UpdateSOPData {
  title?: string;
  description?: string;
  version?: number;
}

export const useSops = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    data: sops,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['sops'],
    queryFn: async () => {
      const response = await apiClient.get<SOP[]>('/api/v1/sops/');
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data || [];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: CreateSOPData) => {
      const response = await apiClient.post<SOP>('/api/v1/sops/', data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sops'] });
      toast({
        title: "Success!",
        description: "SOP created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to create SOP',
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateSOPData }) => {
      const response = await apiClient.patch<SOP>(`/api/v1/sops/${id}`, data);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sops'] });
      toast({
        title: "Success!",
        description: "SOP updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to update SOP',
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await apiClient.delete(`/api/v1/sops/${id}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sops'] });
      toast({
        title: "Success!",
        description: "SOP deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || 'Failed to delete SOP',
        variant: "destructive",
      });
    },
  });

  return {
    sops: sops || [],
    isLoading,
    error,
    refetch,
    createSOP: createMutation.mutate,
    updateSOP: updateMutation.mutate,
    deleteSOP: deleteMutation.mutate,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};

export const useSOP = (sopId: string) => {
  const {
    data: sop,
    isLoading,
    error
  } = useQuery({
    queryKey: ['sop', sopId],
    queryFn: async () => {
      const response = await apiClient.get<SOP>(`/api/v1/sops/${sopId}`);
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    },
    enabled: !!sopId,
  });

  return {
    sop,
    isLoading,
    error,
  };
};
