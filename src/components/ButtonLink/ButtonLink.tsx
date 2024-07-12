import { Link } from "@/navigation";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  type?: "primary" | "secondary" | "grayscale" | "danger" | "success" | "warning" | "info";
  size?: "compact" | "normal" | "large";
  isDark?: boolean;
  className?: string; // Add className prop
}

export default function ButtonLink({
  href,
  children,
  type = "primary",
  size = "normal",
  isDark = false,
  className = "", // Assign default value to className prop,
}: ButtonLinkProps) {
  const buttonClassName = `Button${type ? ` Button--${type}` : ""}${size ? ` Button--${size}` : ""}${
    isDark ? " Button--dark" : ""
  } ${className}`; // Include className in the generated class name with !important

  return (
    <Link href={href}>
      <button className={buttonClassName}>{children}</button>
    </Link>
  );
}
