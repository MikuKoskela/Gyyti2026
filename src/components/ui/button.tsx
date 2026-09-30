import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground border border-primary hover:bg-primary/85 shadow-route",
  outline:
    "bg-transparent text-foreground border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}