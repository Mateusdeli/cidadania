import { Wrapper, Title, TextInfo } from './styles'
import Card from "../../../components/card/equipe/"

export default function Equipe() {
    
    const triciaRedesSociais = ['https://www.facebook.com/triciaesteves', 'https://www.instagram.com/triciaesteves/', 'https://www.linkedin.com/in/triciaesteves/']

    return(
        <Wrapper>
            <Wrapper.Content>
                <Title>
                    Nossa equipe
                </Title>
                <TextInfo line="32px" weight="400">A 3RICIAS é formada por consultores e prestadores de serviços qualificados que, de forma coordenada, inteligente e criativa oferecem, com eficácia serviços para sua nova vida como Cidadão Europeu.</TextInfo>
            </Wrapper.Content>
            <Wrapper.Cards>
                <Card 
                    links={triciaRedesSociais} 
                    name="Tricia Esteves Cesar" 
                    role="CEO e Fundadora" 
                    image="quem-somos4.png" 
                />
                <Card 
                    name="Fernanda Botelho" 
                    role="Partner - Closer" 
                    image="quem-somos6.png" 
                />
            </Wrapper.Cards>
        </Wrapper>
    )
}