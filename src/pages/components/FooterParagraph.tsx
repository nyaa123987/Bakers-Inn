type FooterParagraphProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: FooterParagraphProps) {
  return (
    <p
      onClick={onClick}
      className={` text-[9px] md:text-base text-[white] ${className}`}
    >
      {children}
    </p>
  );
}
