import { DropdownTemplate } from './styles'

export default function Dropdown(props, { children }) {
    return(
        <DropdownTemplate {...props}>
            {children}
        </DropdownTemplate>
    )
}