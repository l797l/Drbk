type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function ButtonInHeader({
  text,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5
        py-2
        rounded-lg
        font-medium
        transition-all
        duration-300
        cursor-pointer

        bg-[#EFE1D1]
        text-[#432E1A]

        hover:bg-white
        active:scale-95

        ${className}
      `}
    >
      {text}
    </button>
  );
}