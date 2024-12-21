import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useUpdateBankAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

// const useDeleteProduct = () => {
//   const queryClient = useQueryClient();

//   const mutationFn = (data) => api.delete("products", data);

//   const onSuccess = async () => {
//     await queryClient.invalidateQueries({ queryKey: ["all-products"] });
//   };

//   return useMutation({ mutationFn, onSuccess });
// };

export { useSendOtp, useCheckOtp, useUpdateBankAccount };
