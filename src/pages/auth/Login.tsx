import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const FacebookIcon = FaFacebook as unknown as React.FC<{ size?: number }>;
    const GoogleIcon = FaGoogle as unknown as React.FC<{ size?: number }>;
    const AppleIcon = FaApple as unknown as React.FC<{ size?: number }>;
  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center p-4">
      <div className="bg-[#111827] rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Bem vindo de volta
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              placeholder="yyyy@xxxxx.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400 text-sm">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#1f2937] border border-gray-700 text-white focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" /> Lembre de mim
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-400 hover:underline">
                Esqueci minha senha
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Entar
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-grow border-gray-700" />
          <span className="text-gray-400 text-sm">Entar com</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-4">
            
          <button className="p-3 bg-[#1f2937] rounded-full text-blue-500 hover:bg-blue-600/20">
            <FacebookIcon size={20} />
          </button>
          <button className="p-3 bg-[#1f2937] rounded-full text-red-500 hover:bg-red-600/20">
            <GoogleIcon size={20} />
          </button>
          <button className="p-3 bg-[#1f2937] rounded-full text-gray-200 hover:bg-gray-600/20">
            <AppleIcon size={20} />
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Não tem uma conta ?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Cadastrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
