import { SelectField, SelectColorField } from './styles'

export const Select = (props, { type, width, name, children}) => {
    return (
        <>
          {type === 'default' ? <SelectField name={name} width={width} {...props} /> : <SelectColorField name={name} width={width} {...props}/>}
        </>
    )
}