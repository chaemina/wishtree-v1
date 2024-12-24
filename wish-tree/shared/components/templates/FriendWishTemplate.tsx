"use client";

import { useQuery } from "@tanstack/react-query";
import { friendwishapi } from "../../service/apis";
import WishTemplate from "./WishTemplate";
import { usePathname } from "next/navigation"; // next/navigation에서 usePathname 사용

export default function FriendWishTemplate() {
    const pathname = usePathname(); // 현재 경로를 가져옴
    const id = pathname?.split("/")[2];  // 'wish/{id}'에서 {id}를 추출

    console.log(id)
      if (!id) {
        return <div>로딩 중...</div>;
    }

    const { data, error, isLoading } = useQuery({
        queryKey: ['friendwish', id],
        queryFn: () => friendwishapi(id as string),
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
