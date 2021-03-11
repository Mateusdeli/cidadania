import { Wrapper, Icon } from './styles'
import BackgroundMask from '../../../styles/backgroundmask/'
import Text from '../../../styles/text/'
import Link from 'next/link'

export default function CardEquipe(props) {
    const { image, name, role, links } = props;
    const icons = ['facebook.png', 'instagram.png', 'linkedin.png']


    const showIcons = () => {
        return icons.map((icon, index) => (
            showLinks(icon, index)
        ))
    }

    const showLinks = (icon, index) => {
        return (
            <Link key={index} href={links[index]}>
                {<a target="_blank"><Icon className="img-fluid" src={`images/${icon}`}/></a>}
            </Link>
        )
    }


    return(
        <Wrapper {...props} image={image}>
            <BackgroundMask.Image border="16px" image="equipe-background.png">
                <Wrapper.Content>
                    {links && (
                        <Wrapper.Icons>
                            {showIcons()}
                        </Wrapper.Icons>
                    )}
                    <Text.Title size="24px" weight="700">{name}</Text.Title>
                    <Text className="mb-0">{role}</Text>
                </Wrapper.Content>
            </BackgroundMask.Image>
        </Wrapper>
    )
}