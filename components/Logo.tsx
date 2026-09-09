"use client";

import Image from "next/image";

// mcc-mark-white.png is the cropped triangle mark only (no wordmark text),
// used for compact spots like the navbar/footer where the full lockup's
// wordmark would be too small to read. mcc-logo.png is the full lockup
// (mark + "MCC GROUP (PVT) LTD" wordmark), used where there's more room
// (the loading screen).
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="relative shrink-0" style={{ height: size, width: size }}>
      <Image
        src="/images/mcc-mark-white.png"
        alt="MCC Group"
        fill
        sizes={`${size}px`}
        className="object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </span>
  );
}
