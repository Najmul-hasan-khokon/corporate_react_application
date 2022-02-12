const Form = ({ className, children, ...rest }) => (
    <form className={className} {...rest}>
        {children}
    </form>
);

export default Form;
