

type Props = {
    value: string;
    name: string;
    label?: string;
    onChange: (event: any) => void;
    placeholder: string;
    className?: string;

};
const ATMTextField = ({ name, value, onChange, label, placeholder, className }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-slate-800 text-2xl "> {label} </label>

            <input
                id={name}
                name={name}
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={`border border-gray-400 rounded-lg h-[32px] p-2 w-full  placeholder:text-gray-500 outline-sky-500 ${className || ''}`}
            />

        </div>
    );
};

export default ATMTextField;
