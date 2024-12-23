"use client";

import { useState, useEffect } from "react";

const useSoundPlayer = (src: string) => {
  const [audio] = useState(new Audio(src)); // Audio 객체 생성
  const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리

  useEffect(() => {
    // 무한 반복 설정
    audio.loop = true;

    return () => {
      // 컴포넌트 언마운트 시 정리
      audio.pause();
      audio.currentTime = 0; // 음악 재생 위치 초기화
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying); // 상태 변경
  };

  return { isPlaying, togglePlay };
};

export default useSoundPlayer;
