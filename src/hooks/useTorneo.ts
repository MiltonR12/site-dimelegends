import {
  createTorneo,
  deleteTorneo,
  getMisTorneos,
  getTorneo,
  getTorneos,
} from "@/api/torneoApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryclient";

export const useGetTorneos = () => {
  return useQuery({
    queryKey: ["torneos"],
    queryFn: getTorneos,
  });
};

export const useGetTorneo = (id: number) => {
  return useQuery({
    queryKey: ["torneo", id],
    queryFn: () => getTorneo(id),
  });
};

export const useGetMisTorneos = () => {
  return useQuery({
    queryKey: ["mistorneos"],
    queryFn: getMisTorneos,
  });
};

export const useCreateTorneo = () => {
  return useMutation({
    mutationKey: ["torneos"],
    mutationFn: createTorneo,
    onSuccess: () => {
      queryClient.invalidateQueries(["torneos", "mistorneos"]);
    },
  });
};

export const useDeleteTorneo = () => {
  return useMutation({
    mutationFn: deleteTorneo,
    onSuccess() {
      queryClient.invalidateQueries(["torneos", "mistorneos"]);
    },
  });
};
