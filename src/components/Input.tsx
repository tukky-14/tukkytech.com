type InputProps = {
    type: string;
    id: string;
    name: string;
    label: string;
    required: boolean;
    style: string;
};

const Input = (props: InputProps) => {
    const { type, id, name, label, required, style } = props;

    return (
        <div className={style}>
            <label className="block text-sm font-medium" htmlFor={id}>
                {label}
            </label>
            <input
                className="focusring mt-1 block w-full rounded-md border border-cyan-300 p-2 shadow-sm focus:border-cyan-300 focus:ring-cyan-200 focus:ring-opacity-50"
                id={id}
                name={name}
                required={required}
                type={type}
            />
        </div>
    );
};

export default Input;
