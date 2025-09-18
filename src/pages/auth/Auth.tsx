import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b1220] overflow-hidden">
      {/* efeitos de fundo responsivos */}
      <div className="absolute -top-32 -left-32 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* conteudo central */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Bem vindo de volta!
        </h1>
        <p className="text-gray-300 mb-10 text-sm md:text-base">
          Entre com os seus dados para acessar sua conta ou efetue o cadastro e brilhe conosco.
        </p>

        <div className="flex bg-white/10 rounded-2xl p-1 backdrop-blur-md shadow-lg">
          <Link
            to="/login"
            className="w-1/2 py-3 rounded-xl text-white font-medium hover:bg-white/20 transition text-sm md:text-base"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="w-1/2 py-3 rounded-xl bg-white text-[#0b1220] font-semibold hover:opacity-90 transition text-sm md:text-base"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
}
