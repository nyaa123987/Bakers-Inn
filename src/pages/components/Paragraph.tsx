type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: ParagraphProps) {
  return (
    <p
      onClick={onClick}
      className={` text-[10px] md:text-base text-[#261B6C] ${className}`}
    >
      {children}
    </p>
  );
}
