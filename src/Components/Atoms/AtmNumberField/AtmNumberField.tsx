import React from 'react';
type Props = {
    value: string;
    name: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string; 
    disabled?: boolean; 
}

const AtmNumberField = ({ name, value, onChange, label, placeholder, className, disabled }: Props) => {

   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (Number(newValue) >= 0 || newValue === "") {
            onChange(event); 
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-slate-800 text-xl">{label}</label>
            <input
                id={name}
                name={name}
                type="number"
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                className={`border border-gray-400 rounded-lg h-[28px] p-1 w-full outline-sky-500 ${className || ''}`} 
                min="0" 
            />
        </div>
    );
}

export default AtmNumberField;
