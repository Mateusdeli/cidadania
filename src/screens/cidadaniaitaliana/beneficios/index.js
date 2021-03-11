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
                    <img className="img-fluid" layout="fixed" width={560} height={551} src="/images/tourists-visiting-leaning-tower-pisa-italy.jpg" />
                    <FlexRow>
                        <Content.Info>
                            <Text.Title className="pt-4">Benefícios da cidadania italiana</Text.Title>
                            <Text className="pt-4">7 vantagens de ter dupla cidadania italiana:</Text>
                        </Content.Info>
                        <Content.Info>
                            <List>
                              <CheckItem text="Está entre os passaportes mais poderosos do mundo." />   
                              <CheckItem text="Pode trabalhar legalmente em qualquer país da União Europeia." />   
                              <CheckItem text="Estudar na Europa." />   
                              <CheckItem text="Direito à saúde pública italiana." />   
                              <CheckItem text="Transmissão da cidadania aos descendentes." />   
                              <CheckItem text="Facilidade de acesso nos Estados Unidos e Canadá." />   
                            </List>
                        </Content.Info>
                    </FlexRow>
                </FlexColumn>
            </Content>
        </Wrapper>
    )
}