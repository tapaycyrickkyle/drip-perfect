"use client";

import { useRef } from "react";

type DatePickerInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function DatePickerInput(props: DatePickerInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <input
      {...props}
      ref={ref}
      type="date"
      suppressHydrationWarning
      onClick={() => {
        try {
          ref.current?.showPicker();
        } catch {
          ref.current?.focus();
        }
      }}
    />
  );
}