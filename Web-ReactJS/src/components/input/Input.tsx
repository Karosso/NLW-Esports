import React, { FC, InputHTMLAttributes } from "react";

interface IInputProps {
  label?: string;
  id: string;
  name: string;
  placeholder: string;
  InputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const Input: FC<IInputProps> = ({ id, label, placeholder, InputProps, name }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-semibold" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...InputProps}
        id={id}
        name={name}
        placeholder={placeholder}
        className="bg-zinc-900 py-3 px-3 rounded text-sm placeholder:text-zinc-500"
      />
    </div>
  );
};
