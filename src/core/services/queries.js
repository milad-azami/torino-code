import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

export { useGetUserData };
