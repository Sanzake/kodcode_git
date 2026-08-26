import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<InputProps> = ({
    label, ...rest
}) => (
    <label>
        {label}
        <input {...rest} />
    </label>
)

export default Input