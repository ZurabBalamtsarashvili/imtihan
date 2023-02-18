export default function Label({ className, children, ...props }) {
    return (
        <label
            className={`${className} block font-medium text-sm text-zinc-700`}
            {...props}>
            {children}
        </label>
    );
}
