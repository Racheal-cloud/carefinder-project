"use client";
import Image from 'next/image';
import React from 'react';

export default function FrontView() {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/images/CareAbout.jpg"
        alt="carefinder"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
