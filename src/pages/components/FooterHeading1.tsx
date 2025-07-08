type FooterHeading1Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: FooterHeading1Props) {
  return (
    <h1
      onClick={onClick}
      className={` text-[10px] md:text-2xl font-semibold text-[white] mb-[1.5vh] md:mb-[2vh] ${className}`}
    >
      {children}
    </h1>
  );
}
