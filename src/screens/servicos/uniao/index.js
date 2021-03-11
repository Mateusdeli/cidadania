import Link from 'next/link'
import Text from '../../../styles/text/'
import {CheckItem} from '../../../components/check/'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import styled from 'styled-components'
import {Select} from '../../../components/select'
import {Option} from '../../../components/select/option/'

const Wrapper = styled.div`
    position: absolute;
    top: 703px;
    left: 390px;
    width: 1140px;
    height: 1200px;
`;

const Content = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 463px;
    height: 454px;
    border-radius: 32px;
`;

Content.Buttons = styled(FlexColumn)`
    padding-top: 24px;
    button {
        margin: 0 12px;
    }
`;

const Title = styled(Text.Title)`
    font-weight: 700;
    &::after {
        content: "";
        display: inline-block;
        margin-left: 36px;
        margin-bottom: 8px;
        width: 156px;
        background-color: ${({ theme }) => theme.colors.primary};
        height: 4px;
    }
`

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const Flex = styled(FlexColumn)`
    margin: 16px 0;
`

const SelectContent = styled.div`
    width: 100%;
    display: flex;
    flex-basis: 2;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Uniao = () => {

    function RenderDropdown() {
        const informations = [
            {
                name: "contratos",
                value: "Notariado/Contratos Particulares"
            },
            {
                name: "comerciais",
                value: "Comerciais"
            },
            {
                name: "fiscalidade",
                value: "Fiscalidade"
            },
            {
                name: "registros",
                value: "Registros"
            },
            {
                name: "escrituras",
                value: "Preparação de escrituras"
            },
            {
                name: "consultas_jurídicas",
                value: "Consultas jurídicas e pareceres"
            },
            {
                name: "cobranca_creditos",
                value: "Cobrança de créditos"
            },
            {
                name: "outros",
                value: "Outros"
            },
            {
                name: "conta_bancaria",
                value: "Abertura de conta em bancária Portugal"
            },
            {
                name: "arbitragem",
                value: "Arbitragem"
            },
        ]
        return informations.map((info, index) => (
            <Flex key={index}>
                <Select type="servicos" name={info.name} width="535">
                    <Option value={info.value}>{info.value}</Option>
                </Select>
            </Flex>
            
        ))
    }
    return(
        <Wrapper>
            <FlexColumn>
                <Content>
                    <Text weight="400" size="16" line="32px" font="Open Sans">
                        Cuidamos de todo planejamento estratégico, para seu investimento, 
                        mudança ou expansão de suas atividades nos 
                        Estados Unidos e União Europeia bem como o suporte necessário para 
                        os itens críticos da adaptação pessoal e familiar.
                    </Text>
                    <Title className="pt-4">União Européia</Title>
                    <List className="pt-4">
                        <CheckItem text="Internacionalização de empresas e produtos" />   
                        <CheckItem text="Constituição de sociedades comerciais" />   
                        <CheckItem text="Gestão de patrimônio" />   
                        <CheckItem text="Representações Fiscais" />   
                        <CheckItem text="Execuções Europeias (Cobrança de Dívidas)" />  
                    </List>
                </Content>
                <Content>
                    <FlexRow align="flex-end">
                        <FlexRow align="center">
                            <Image src="images/servicos1.png" alt="passaporte uniao europeia" />
                        </FlexRow>
                    </FlexRow>
                </Content>
            </FlexColumn>
            <SelectContent>
                {RenderDropdown()}
            </SelectContent>
        </Wrapper>
    )
}