"use client";

import { useState, useEffect } from "react";

const useSoundPlayer = (src: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // 초기 상태는 null
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 브라우저 환경에서만 Audio 객체 생성
    if (typeof window !== "undefined") {
      const newAudio = new Audio(src);
      newAudio.loop = true; // 무한 반복 설정
      setAudio(newAudio);
    }

    return () => {
      // 컴포넌트 언마운트 시 정리
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [src]); // src가 변경될 때마다 실행

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, togglePlay };
};

export default useSoundPlayer;
