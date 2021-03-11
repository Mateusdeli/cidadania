import { InputField, InputCheckboxField } from './styles'
import React from 'react'

const types = {
    checkbox: 'checkbox'
}

const Input = (props) => {
    const { width, height, type, name, innerRef, validate} = props
    switch (props.type) {
        case types.checkbox:
            return (<InputCheckboxField ref={innerRef} type={type} name={name} height={height} width={width} {...props} />)

        default:
            return (<InputField $validation={validate} ref={innerRef} type={type} name={name} height={height} width={width} {...props} />)
    }
}

export default React.forwardRef((props, ref) => <Input {...props} innerRef={ref} />)