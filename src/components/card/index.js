import CardTemplate, { Flag, Title, Text, Arrow } from './styles'
import usePushPage from '../../hooks/usePushPage'

export default function Card(props) {
    const routerPush = usePushPage(props.path ? props.path : '/') 
    return (
        <CardTemplate image={props.image}>
            <CardTemplate.Content onClick={routerPush.handlePush}>
                <span style={{cursor: 'pointer'}} {...props}>
                    <CardTemplate.Infomation>
                        <Flag marginzero={props.marginzero} className="img-fluid" src={`images/${props.flag}`} />
                        <Title>{props.title}</Title>
                        <Text>{props.description}</Text>
                    </CardTemplate.Infomation>
                </span>
                <CardTemplate.Arrow>
                    <Arrow />
                </CardTemplate.Arrow>
            </CardTemplate.Content>
        </CardTemplate>
    )
}