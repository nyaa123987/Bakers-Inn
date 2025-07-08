"use client";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent scroll behind modal
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
      <div className="relative bg-white w-full max-w-3xl rounded-md p-6 overflow-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-black">&times;</button>
        {children}
      </div>
    </div>
  );
}
