import React from 'react'

type Props = {
    value: string;
    name: string;
    label: string;
    onChange: (event: any) => void;
    placeholder: string;
    className?: string; 
}

const AtmNumberField = ({ name, value, onChange, label, placeholder, className }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-slate-800 text-xl"> {label} </label>

            <input
                id={name}
                name={name}
                type="number"
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={`border border-gray-400 rounded-lg h-[28px] p-1 w-full  outline-sky-500 ${className || ''}`} 
            />
           
        </div>
    );
}

export default AtmNumberField