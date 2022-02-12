const Button = ({ className, children, ...rest }) => (
    <button type="submit" className={className} {...rest}>
        {children}
    </button>
);

export default Button;
