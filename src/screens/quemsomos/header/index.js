import { Background, Content } from './styles'
import BackgroundMask from '../../../styles/backgroundmask/'
import { Container } from 'react-bootstrap'

export default function Header() {
    return (
        <Background>
            <BackgroundMask>
                <Content>
                    <Content.Wrapper>
                        <Content.Title weight="700" line="52px">Quem somos</Content.Title>
                        <Content.Text weight="400" line="28px">
                            O maior e mais confiável grupo de Consultoria Especializada para UE e EUA.
                            Na 3RICIAS você encontra o melhor caminho, com todo conforto e segurança para ingressar no mercado Europeu e Estados
                            Unidos da América. Cuidamos de todo planejamento estratégico, para seu investimento, mudança 
                            ou ampliação de suas atividades nos Estados Unidos e União Europeia bem como o suporte
                            necessário para os itens críticos da adaptação pessoal e familiar.
                        </Content.Text>
                    </Content.Wrapper>
                </Content>
            </BackgroundMask>
        </Background>
    )
}