import Text from '../../styles/text/'
import { IconImage } from './styles'

export default function Icon(props, { text, image }) {
    return(
        <>
            <Icon className="img-fluid" src={image} />
            <Text.Span {...props}>{text}</Text.Span>
        </>
    )
}

