import React from 'react'
import Text from '../../../styles/text/'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import { Wrapper, Content, List } from './styles'
import {CheckItem} from '../../../components/check/'

export default function Beneficios() {
    return(
        <Wrapper>
            <Content>
                <FlexColumn>
                    <img className="img-fluid" layout="fixed" width="560" height="551" src="/images/view-lisbon-cityscape-saint-jorge-castle-cidadania-portuguesa.png" />
                    <FlexRow>
                        <Content.Info>
                            <Text.Title className="pt-2">Benefícios da cidadania portuguesa</Text.Title>
                            <Text className="pt-2">7 vantagens de ter dupla cidadania portuguesa:</Text>
                        </Content.Info>
                        <Content.Info>
                            <List>
                              <CheckItem text="Ser considerado um cidadão europeu" />   
                              <CheckItem text="Qualidade de vida melhor" />   
                              <CheckItem text="Facilidade de acesso a demais países" />   
                              <CheckItem text="Morar em qualquer país da Europa e países que possuem acordo com a UE" />   
                              <CheckItem text="Estudar nas melhores escolas e universidades da UE" />   
                              <CheckItem text="Passar a nacionalidade para seus descendentes" />   
                              <CheckItem text="Isenção de visto para trânsito em países que possuem acordo com UE" />   
                            </List>
                        </Content.Info>
                    </FlexRow>
                </FlexColumn>
            </Content>
        </Wrapper>
    )
}