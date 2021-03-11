export const Option = ({value, children, ...rest}) => {
    return (
        <option {...rest} value={value}>{children}</option>
    )
}