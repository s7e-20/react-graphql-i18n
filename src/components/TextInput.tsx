import React from "react";
import { useTranslation } from "react-i18next";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput: React.FC<Props> = ({ label, error, ...rest }) => {
  const id = React.useId();
  const { t } = useTranslation('common');

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
        className="border border-primary p-1 rounded-md disabled:bg-neutral disabled:cursor-no-drop focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && <p className="text-red-500">{t(error)}</p>}
    </div>
  );
};
