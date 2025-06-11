import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  type = "button",
  to,
  variant = "default",
}) => {
  const baseStyle = `
    font-bold 
    px-6 py-3 
    rounded-full shadow-lg 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-pink-300
  `;

  const variants = {
    default: `
      bg-gradient-to-r from-pink-400 to-orange-400 
      hover:from-pink-500 hover:to-orange-500 
      text-white 
      w-full max-w-xs m-auto
    `,
    small: `
      bg-pink-100 text-pink-600 
      hover:bg-pink-200 
      text-sm py-2 px-4 
      shadow 
      w-auto
    `,
  };

  const styles = `${baseStyle} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
