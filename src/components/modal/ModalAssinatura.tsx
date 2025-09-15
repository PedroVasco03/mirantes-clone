import React from "react";

type ModalAssinaturaProps = {
  title: string;
  variant?: "default" | "pro" | "enterprise";
  onClose: () => void;
};

const ModalAssinatura: React.FC<ModalAssinaturaProps> = ({
  title,
  variant = "default",
  onClose,
}) => {
  // cores diferentes por plano
  const variantColors: Record<typeof variant, string> = {
    default: "bg-white text-gray-900",
    pro: "bg-blue-600 text-white",
    enterprise: "bg-gray-800 text-white",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`rounded-lg w-96 p-6 relative shadow-lg ${variantColors[variant]}`}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Assinar {title}</h2>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nome completo"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className={`mt-2 rounded py-2 font-medium transition ${
              variant === "pro"
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : variant === "enterprise"
                ? "bg-gray-700 text-white hover:bg-gray-800"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Confirmar assinatura
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalAssinatura;
