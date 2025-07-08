type Heading2Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading2Props) {
  return (
    <h2
      onClick={onClick}
      className={` text-xl md:text-3xl font-semibold text-[#261B6C] mb-3 ${className}`}
    >
      {children}
    </h2>
  );
}
