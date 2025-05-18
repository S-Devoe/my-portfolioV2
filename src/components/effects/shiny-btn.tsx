import { cn } from "@/lib/utils";

interface ShinyBtnProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  onClick?: () => void;
}
const ShinyBtn = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  onClick,
}: ShinyBtnProps) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        `shiny-text border px-4 py-0.5 text-white text-sm rounded-[4rem] cursor-pointer ${
          disabled ? "disabled" : ""
        }`,
        className
      )}
      style={{ animationDuration }}
    >
      {text}
    </button>
  );
};

export default ShinyBtn;
