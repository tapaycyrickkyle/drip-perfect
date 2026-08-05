"use client";

import Image from "next/image";
import { useRef } from "react";
import { Search } from "./icons";

interface GcashQrModalProps {
  src: string;
  alt: string;
}

export default function GcashQrModal({ src, alt }: GcashQrModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        aria-label="View larger GCash QR code"
        onClick={() => dialogRef.current?.showModal()}
        suppressHydrationWarning
        className="group relative h-[140px] w-[140px] shrink-0 cursor-zoom-in overflow-hidden rounded-xl ring-1 ring-border-tint transition-all hover:ring-2 hover:ring-pink-deep"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="140px"
          className="object-contain"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-plum/0 transition-colors group-hover:bg-plum/20">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-plum opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            <Search className="h-4 w-4" />
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-[480px] rounded-2xl border-0 bg-white p-5 text-plum [&::backdrop]:bg-plum/40 [&::backdrop]:backdrop-blur-sm sm:p-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold tracking-wide text-plum uppercase">
            GCash Payment
          </p>
          <button
            type="button"
            aria-label="Close QR preview"
            onClick={() => dialogRef.current?.close()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-plum transition-colors hover:bg-rose/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="relative mt-3 aspect-square max-h-[70vh] w-full overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="480px"
            className="object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted sm:text-[13px]">
          Scan with your GCash app
        </p>
      </dialog>
    </>
  );
}
