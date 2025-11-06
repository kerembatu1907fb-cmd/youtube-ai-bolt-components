import React from "react";

export default function CustomButton({ label = "Tıkla" }: { label?: string }) {
  return (
    <button className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
      {label}
    </button>
  );
}
