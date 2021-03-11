import { Wrapper, Title, Paragraph, ImageLeft } from './styles'
import Card from '../../../components/card/'

export default function Servicos() {
    return(
        <Wrapper>
            <Title size="36px" line="48px" weight="bold">
                Podemos ajudar você a alcançar a tão sonhada cidadania!
            </Title>
            <Paragraph>
                Assessoramos você durante todo processo para sua cidadania Europeia.
            </Paragraph>
            <Wrapper.ImageLeft>
                <ImageLeft />
            </Wrapper.ImageLeft>
            <Wrapper.BoxServices>
                <Wrapper.Cards>
                    <Wrapper.CardContent>
                        <Card
                            path="/cidadania-italiana"
                            image="stylish-young-woman-sits-background-famous-ponte-vecchio-with-river-arno-florence-italy.png"
                            flag="438252c20c93d3963bd0876a9709fd611.png"
                            title="Cidadania Italiana"
                            description="Dupla cidadania Italiana? Conheça nossos serviços."
                        />
                    </Wrapper.CardContent>
                    <Wrapper.CardContent>
                        <Card
                            path="/cidadania-portuguesa"
                            image="happy-people-portugal.png"
                            flag="bandeira-portugal-1200x675.png"
                            title="Cidadania Portuguesa"
                            description="Dupla cidadania portuguesa? Conheça nossos serviços."
                        />
                    </Wrapper.CardContent>
                    <Wrapper.CardContent>
                        <Card
                            path="/servicos"
                            image="smiling-businessman-showing-his-boarding-pass.png"
                            flag="LogoCard.png"
                            title="Consultoria e Assessoria"
                            marginzero="true"
                            description="Quer ingressar no mercado Europeu e Estados Unidos?"
                        />
                    </Wrapper.CardContent>
                </Wrapper.Cards>
            </Wrapper.BoxServices>
        </Wrapper>
    )
}