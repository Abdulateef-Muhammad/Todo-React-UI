const Text = (props)=> {

    // default props
    const { classes = 'text-slate-300 uppercase text-sm font-bold tracking-wider', text = '', Tag='h2', ...restProps} = props;
    
    return (
        <Tag className={classes} {...restProps}>{text}</Tag>
    );
}

export default Text;