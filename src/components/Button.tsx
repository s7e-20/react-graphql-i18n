import React from "react";
import { BiLoader } from "react-icons/bi";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  variant?: "fill" | "outline";
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  loading = false,
  variant = "fill",
  rightIcon,
  label,
  ...rest
}) => {
  const baseClasses =
    "px-4 py-2 text-lg font-medium rounded-md flex items-center justify-center gap-x-2";
  const fillClasses = "bg-primary text-white hover:bg-secondary";
  const outlineClasses =
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const loadingClasses = "cursor-wait";

  const appliedClasses = `${baseClasses} ${
    variant === "fill" ? fillClasses : outlineClasses
  } ${disabled || loading ? disabledClasses : ""} ${
    loading ? loadingClasses : ""
  } ${rest.className}`;

  return (
    <button disabled={disabled || loading} className={appliedClasses} {...rest}>
      {label}
      {loading ? <BiLoader className="animate-spin" /> : rightIcon}
    </button>
  );
};
