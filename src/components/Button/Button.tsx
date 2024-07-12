import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "primary" | "secondary" | "grayscale" | "danger" | "success" | "warning" | "info";
  size?: "compact" | "normal" | "large";
  isDark?: boolean;
  className?: string; // Add className prop
}

export default function Button({
  onClick,
  children,
  type = "primary",
  size = "normal",
  isDark = false,
  className = "", // Assign default value to className prop,
}: ButtonProps) {
  const buttonClassName = `Button${type ? ` Button--${type}` : ""}${size ? ` Button--${size}` : ""}${
    isDark ? " Button--dark" : ""
  } ${className}`; // Include className in the generated class name with !important

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
