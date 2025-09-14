import "../global.components.css"; 

type PlanCardProps = {
  title: string;
  description: string;
  buttonText: string;
  variant?: "default" | "pro" | "enterprise";
};

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  buttonText,
  variant = "default",
}) => {
  const baseStyle =
    "rounded-2xl p-6 shadow-md transition-transform duration-300";
  const variants: Record<typeof variant, string> = {
    default: "bg-transparent border border-gray-300",
    pro: "bg-blue-600 text-white scale-105",
    enterprise: "bg-gray-100 border border-gray-400",
  };

  const btnBase = "inline-block mt-4 px-4 py-2 rounded-lg font-medium";
  const btnVariants: Record<typeof variant, string> = {
    default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    pro: "bg-white text-blue-600 hover:bg-gray-100",
    enterprise: "bg-gray-700 text-white hover:bg-gray-800",
  };

  return (
    <div className={`${baseStyle} ${variants[variant]}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p
        className={`mb-4 ${
          variant === "pro" ? "text-blue-100" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <a href="#" className={`${btnBase} ${btnVariants[variant]}`}>
        {buttonText}
      </a>
    </div>
  );
};

export default PlanCard;
