import React from "react";

export default function BrandCard({ url, children }: any) {
  return (
    <a draggable={false} href={url} className="BrandCard">
      {children}
    </a>
  );
}
