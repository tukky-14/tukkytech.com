type ButtonProps = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    id?: string;
    text: string;
    onClick?: () => void;
};

const Button = (props: ButtonProps) => {
    const { type, id, text, onClick } = props;
    return (
        <button
            className="rounded bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            id={id}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
