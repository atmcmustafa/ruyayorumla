import { Link } from "react-router-dom";

const Button = ({ children, to, color, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={`${to}`}
      className={`h-10 w-40 ${color} transition-all text-center mx-auto md:mx-0 duration-300 font-semibold rounded text-white flex items-center justify-center`}
    >
      {children}
    </Link>
  );
};

export default Button;
