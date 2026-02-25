import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Maximum width variant */
  size?: "sm" | "md" | "lg" | "xl";
  /** Center the content text */
  center?: boolean;
}

const sizeStyles: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

/**
 * Reusable container with consistent horizontal padding and max-width.
 * Server component.
 */
export default function Container({
  children,
  className = "",
  size = "lg",
  center = false,
}: ContainerProps) {
  return (
    <div
      className={`
        ${sizeStyles[size]}
        mx-auto
        px-4 sm:px-6 lg:px-8
        ${center ? "text-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
