type TextInHeaderProps = {
  text: string;
  className?: string;

};

export default function TextInHeader({
  text,
  className = "",
 
}: TextInHeaderProps) {
  return (
    <p
      className={`
        
        ${className}
      `}
    >
      {text}
    </p>
  );
}