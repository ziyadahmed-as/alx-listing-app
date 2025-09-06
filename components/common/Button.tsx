
import { ButtonProps } from '@/interfaces';
const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded font-bold";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;