import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};

// const useCreateProduct = () => {
//   const queryClient = useQueryClient();

//   const mutationFn = (data) => api.post("products", data);

//   const onSuccess = async () => {
//     await queryClient.invalidateQueries({ queryKey: ["all-products"] });
//   };

//   return useMutation({ mutationFn, onSuccess });
// };

// const useDeleteProduct = () => {
//   const queryClient = useQueryClient();

//   const mutationFn = (data) => api.delete("products", data);

//   const onSuccess = async () => {
//     await queryClient.invalidateQueries({ queryKey: ["all-products"] });
//   };

//   return useMutation({ mutationFn, onSuccess });
// };

export { useSendOtp, useCheckOtp };
