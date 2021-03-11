import { Item } from './styles'

export default function DropdownItem(props) {
    const { text, href } = props
    return(
        <Item href={href}>{text}</Item>
    )
}