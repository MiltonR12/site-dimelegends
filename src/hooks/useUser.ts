import { useQuery, useMutation } from "@tanstack/react-query";
import { createUser, getUser, loginUser, updateUser } from "@/api/userApi";
import { queryClient } from "@/lib/queryclient";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: createUser,
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["usuario"],
    queryFn: getUser,
    retry: 2,
  });
};

export const useUpdateuser = () => {
  return useMutation({
    mutationFn: updateUser,
    onSuccess() {
      queryClient.invalidateQueries(["usuario"]);
    },
  });
};
