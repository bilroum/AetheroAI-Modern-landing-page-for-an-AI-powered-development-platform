import type { ReactNode } from "react";

interface NumberProps {
  title: string;
  text: string;
  className?: ReactNode;
}
export const Number = ({ title, text, className = "" }: NumberProps) => {
  return (
    <div className={`flex flex-col items-center text-center px-5  ${className}`}>
      <h2
        className={`font-semibold text-xl sm:text-2xl  md:text-4xl text-heading-1 ${className}`}
      >
        {title}{" "}
      </h2>
      <p className={`mt-1 md:mt-2 text-heading-3 md:text-heading-2 ${className}`}>{text}</p>
    </div>
  );
};
