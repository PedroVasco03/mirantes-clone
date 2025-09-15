import React, { useState, useEffect } from "react";

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose, planName }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setShow(true);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300); // aguarda animação
  };

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">{planName}</h2>
        <p className="text-gray-600 mb-6 text-center">
          Preencha seus dados para assinar este plano.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Assinar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;
