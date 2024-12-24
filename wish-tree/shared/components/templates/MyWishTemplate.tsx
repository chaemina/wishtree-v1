"use client"

import { useQuery } from "@tanstack/react-query";
import { mywishapi } from "../../service/apis";
import WishTemplate from "./WishTemplate";

export default function MyWishTemplate() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['mywish'],
    queryFn: mywishapi,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  const content = data?.response?.content;

  return <WishTemplate content={content} />;
}
