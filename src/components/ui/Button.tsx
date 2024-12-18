import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: Iprops) => {
  return (
    <button className={`${className} p-3  rounded-xl flex-1 `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
