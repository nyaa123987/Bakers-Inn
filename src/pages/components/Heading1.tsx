type Heading1Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className = "", onClick }: Heading1Props) {
  return (
    <h1
      onClick={onClick}
      className={` font-bold text-3xl md:text-5xl text-white mb-[2vh] ${className}`}
    >
      {children}
    </h1>
  );
}
