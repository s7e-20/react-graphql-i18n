import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput: React.FC<Props> = ({
  label,
  error,
  ...rest
}) => {
  const id = React.useId();

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      )}
      <input
        id={id}
        {...rest}
        className="border border-primary p-1 rounded-md disabled:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
