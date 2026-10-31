"use client";

import { useState } from "react";
import { assetManifest } from "@/content/asset-manifest";
import { siteConfig, type TeddyMood } from "@/content/site-config";
import { TeddyFallback } from "@/components/TeddyFallback";

type TeddyCharacterProps = {
  mood: TeddyMood;
  className?: string;
  priority?: boolean;
};

const labels: Record<TeddyMood, string> = {
  wave: "Chú gấu Teddy dễ thương đang vẫy tay chào",
  heart: "Chú gấu Teddy đang ôm một trái tim hồng",
  flower: "Chú gấu Teddy đang cầm bó hoa nhỏ",
  shy: "Chú gấu Teddy đang ngại ngùng",
  hug: "Chú gấu Teddy đang ôm trái tim thật lớn",
};

export function TeddyCharacter({ mood, className = "", priority = false }: TeddyCharacterProps) {
  const [failed, setFailed] = useState(false);
  const hasGif = assetManifest.gifs[mood] && !failed;

  return (
    <div className={`teddy-character ${className}`}>
      {hasGif ? (
        // Dùng img thường để giữ nguyên animation GIF, không chuyển thành ảnh tĩnh.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={siteConfig.gifs[mood]}
          alt={labels[mood]}
          className="teddy-gif"
          width="320"
          height="320"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="teddy-fallback" role="img" aria-label={`${labels[mood]} — hình minh họa dự phòng`}>
          <TeddyFallback mood={mood} />
        </div>
      )}
    </div>
  );
}
