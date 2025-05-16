interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 md:px-6 md:py-3 rounded-full outline-none relative overflow-hidden 
        border bg-violet-600 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
