"use client"

import { useQuery } from "@tanstack/react-query";
import { mywishapi } from "../components/service/apis";

export const useMyWish = () => {
  return useQuery({
    queryKey: ['mywish'],  
    queryFn: mywishapi,
  });
};
