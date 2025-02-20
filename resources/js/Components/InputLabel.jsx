export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm mt-8 font-normal text-black ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
