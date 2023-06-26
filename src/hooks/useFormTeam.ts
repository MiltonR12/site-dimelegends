import { deleteRecord, getTeams, registerDevice } from "@/api/formApi";
import { queryClient } from "@/lib/queryclient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTeams = (url_formulario: string) => {
  return useQuery({
    queryKey: ["teams", url_formulario],
    queryFn: () => getTeams(url_formulario),
  });
};

export const useRegisterDevice = () => {
  return useMutation({
    mutationFn: registerDevice,
    onSuccess() {
      queryClient.invalidateQueries(["teams"]);
    },
  });
};

export const useDeleteRecord = () => {
  return useMutation({
    mutationFn: deleteRecord,
    onSuccess() {
      queryClient.invalidateQueries(["teams"])
    }    
  })
}