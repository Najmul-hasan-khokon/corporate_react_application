const Textarea = ({ className, children, ...rest }) => (
    <textarea className={className} {...rest}>
        {children}
    </textarea>
);

export default Textarea;
