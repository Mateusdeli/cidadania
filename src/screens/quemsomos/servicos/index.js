import { Wrapper } from './styles'
import Text from '../../../styles/text/'
import Card from '../../../components/card/'

export default function Servicos() {
    
    return (
        <Wrapper>
            <Wrapper.Content>
                <Text.Title weight="700" size="40px" line="56px">Podemos ajudar você a alcançar a <br /> tão sonhada cidadania!</Text.Title>
                <Text className="pt-3">Assessoramos você durante todo processo para sua cidadania Europeia.</Text>
            </Wrapper.Content>
            <Wrapper.Cards>
                <Card
                  path="/cidadania-italiana"
                  image="stylish-young-woman-sits-background-famous-ponte-vecchio-with-river-arno-florence-italy.png"
                  flag="438252c20c93d3963bd0876a9709fd611.png"
                  title="Cidadania Italiana"
                  description="Dupla cidadania Italiana? Conheça nossos serviços."
                />
                <Card
                  path="/cidadania-portuguesa"
                  image="happy-people-portugal.png"
                  flag="bandeira-portugal-1200x675.png"
                  title="Cidadania Portuguesa"
                  description="Dupla cidadania portuguesa? Conheça nossos serviços."
                />
                <Card
                    path="/servicos"
                    image="smiling-businessman-showing-his-boarding-pass.png"
                    flag="LogoCard.png"
                    marginzero="true"
                    title="Consultoria e Assessoria"
                    description="Quer ingressar no mercado Europeu e Estados Unidos?"
                />
            </Wrapper.Cards>
        </Wrapper>
    )
}