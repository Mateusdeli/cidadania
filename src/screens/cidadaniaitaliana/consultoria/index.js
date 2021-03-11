import React from 'react'
import Text from '../../../styles/text/'
import { Wrapper, Content } from './styles'
// import { FlexColumn } from '../../../styles/flex/'
// import Formularios from '../formularios/'

export default function Consultoria() {
    return(
        <Wrapper>
            <Content>
                <Text.Title font="Open Sans" weight="700" line="56px">Consultoria Especial</Text.Title>
                <Text className="pt-3" weight="400" line="28px">
                    3RICIAS CIDADANIA ITALIANA é uma empresa de assessoria completa 
                    para que você possa realizar seus objetivos em ser um cidadão europeu, 
                    seja para trabalho, busca de qualidade de vida, 
                    investimentos e muitas outras vantagens, fale com um de nossos especialistas.
                </Text>
                <Text font="Open Sans" weight="400" line="28px">
                    Contamos com profissionais qualificados com excelência. O futuro é agora, entre em contato com
                    a 3RICIAS e realize os seus sonhos de ser um cidadão europeu. 
                </Text>
            </Content>
        </Wrapper>
    )
}

{/* <FlexColumn>
                    <div>
                      <Text.Title font="Open Sans" weight="700" line="56px">Consultoria Especial</Text.Title>
                      <Text className="pt-3" weight="400" line="28px">
                          3RICIAS CIDADANIA ITALIANA é uma empresa de assessoria completa 
                          para que você possa realizar seus objetivos em ser um cidadão europeu, 
                          seja para trabalho, busca de qualidade de vida, 
                          investimentos e muitas outras vantagens, fale com um de nossos especialistas.
                      </Text>
                      <Text font="Open Sans" weight="400" line="28px">
                          Contamos com profissionais qualificados com excelência. O futuro é agora, entre em contato com
                          a 3RICIAS e realize os seus sonhos de ser um cidadão europeu. 
                      </Text>
                    </div>
                    <div>
                    </div>
                </FlexColumn> */}