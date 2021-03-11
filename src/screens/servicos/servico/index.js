import styled from 'styled-components'
import Text from '../../../styles/text/'
import { CheckItem } from '../../../components/check/'
import { CardServico } from '../../../components/card/servicos/'

const Wrapper = styled.div`
    height: 951px;
    width: 1140px;
    position: relative;
    top: 2322px;
    left: 390px;
`

Wrapper.Content = styled.div`
    margin-top: 100px;
`

const Title = styled(Text.Title)`
    text-align: center;
`

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Servico = () => {
    return (
        <Wrapper>
            <Title weight="700" size="36px">Serviços de lazer e turismo</Title>
            <Wrapper.Content>
                <Flex>
                    <CardServico
                        image="friends-friendship-fist-togetherness-concept.png"
                        title="Parceria com centro cultural:">
                    <List>
                        <CheckItem weight="400" text="Cursos de idiomas" />
                        <CheckItem weight="400" text="Curso preparatório para obtenção de certificação - A2 Integrazzione e B1 (Cittadinanza) para certificação CILS" />
                        <CheckItem weight="400" text="Aulas de gastronomia italiana e portuguesa no Brasil" />
                    </List>
                    </CardServico>
                    <CardServico 
                        image="couple-travelers-pointing-directions.png"
                        title="Parceria com agências de viagens:">
                    <List>
                        <CheckItem weight="400" text="Tours personalizados pela europa com guias brasileiros" />
                        <CheckItem weight="400" text="Tours enogastronômico" />
                        <CheckItem weight="400" text="Aulas de culinárias locais - Portugal e Itália" />
                        <CheckItem weight="400" text="Wine Tours - Portugal e Itália" />
                        <CheckItem weight="400" text="Wedding, Pré-widding e mini-wedding - Portugal e Itália" />
                        <CheckItem weight="400" text="Passeios ciclísticos com instrutores brasileiros - Portugal e Itália" />
                    </List>
                    </CardServico>
                </Flex>
            </Wrapper.Content>
        </Wrapper>
    )
}