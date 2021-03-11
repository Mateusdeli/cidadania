import React from 'react'
import Text from '../../../styles/text/'
import { Wrapper, Content, List } from './styles'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import ItemServico from './item'
import Image from 'next/image'

export default function Servicos() {
    return (
        <Wrapper>
            <Content>
                <div>
                    <Content.Info>
                        <Text.Title id="id" weight="700" line="56px" size="40px">Conheça alguns de nossos <span>serviços</span></Text.Title>
                        <div className="mt-5">
                            <Text.Title id="nacionalidade-portuguesa" className="pb-3" weight="600" size="32px" line="42px">Nacionalidade portuguesa</Text.Title>
                            <Text>
                                Considerado o 6º mais poderoso do mundo, o passaporte português é direito de uma 
                                imensidão de brasileiros — afinal de contas, 
                                não é somente a língua que dividimos. Estima-se que cerca de 30% da 
                                população brasileira tenha direito, direta ou indiretamente, à cidadania portuguesa.
                            </Text>
                        </div>
                    </Content.Info>
                </div>
              <Content.Servicos>
                <FlexColumn>
                    <FlexRow>
                        <List>
                            <ItemServico 
                                index="1" 
                                title="Para filhos"  
                                text="Com apenas três etapas, os filhos de portugueses conseguem conquistar o passaporte português em pouco tempo — e você consegue acompanhar em tempo real o passo a passo da movimentação com a 3RICIAS."
                            />
                            <ItemServico 
                                index="2"
                                title="Para netos"
                                text="Netos diretos de portugueses precisam satisfazer apenas três requisitos para conseguir a nacionalidade. Simples, rápido e muito menos burocrático com a 3RICIAS."
                            />
                            <ItemServico 
                                index="3"
                                title="Para cônjuges"
                                text="Tem direito à cidadania portuguesa por casamento os estrangeiros que se casaram com portugueses, ou aqueles que tenham união estável — conhecida como união de facto no país. São necessários 3 ou 6 anos de casado, dependendo de alguns detalhes técnicos que a 3RICIAS resolve por você!"
                            />
                        </List>
                    </FlexRow>
                    <div>
                        <img className="img-fluid" width="463" height="460" src="/images/businessman-checking-documents-at-table.png" />
                    </div>
                </FlexColumn>
            </Content.Servicos>
            </Content>
        </Wrapper>    
    )
}