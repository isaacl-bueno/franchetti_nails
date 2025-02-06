"use client";
import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center pb-0.5
          w-5 h-5
          text-[#F092A2] hover:text-white hover:border-white  top-6 right-6"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
