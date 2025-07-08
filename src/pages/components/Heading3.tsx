type Heading3Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading3Props) {
  return (
    <h3
      onClick={onClick}
      className={` text-sm md:text-xl font-semibold text-[#261B6C] mb-2 ${className}`}
    >
      {children}
    </h3>
  );
}
