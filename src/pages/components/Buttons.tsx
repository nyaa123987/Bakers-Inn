type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`uppercase text-[10px] py-[4px] px-[20px] md:py-[8px] md:px-[40px] cursor:pointer md:text-[20px] bg-[#B2904C] text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}
