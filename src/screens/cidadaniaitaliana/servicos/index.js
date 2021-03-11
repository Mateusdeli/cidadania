import React from 'react'
import Text from '../../../styles/text/'
import { Wrapper, Content, List } from './styles'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import ItemServico from './item'

export default function Servicos() {
    return (
        <Wrapper>
            <Content>
                <div>
                    <Content.Info>
                        <Text.Title weight="700" line="56px" size="40px">Conheça alguns de nossos <span>serviços</span></Text.Title>
                        <div className="mt-5" id="reconhecimento-cidadania-italiana">
                            <Text.Title className="pb-3" weight="600" size="32px" line="42px">Reconhecimento da cidadania italiana</Text.Title>
                            <Text>
                                Regulada fundamentalmente pela lei número 91 de 15 de fevereiro de 1992, a cidadania italiana tem como princípio básico o “iure sanguinis”, no qual a aquisição é feita pela descendência (em diversos graus), como o próprio significado do nome já diz: “Direito de Sangue”. Em 2020, foi considerado o 4° passaporte mais poderoso do mundo e atualmente existem três vias principais para o processo da sua cidadania italiana. Conheça:
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
                                title="Via administrativa"  
                                text="É uma via individual e na qual o requerente precisa estar na Itália para realizar o processo diretamente no Comune. Pode envolver custos como: passagens aéreas, seguro de viagens, aluguel de residência com contrato de locação, alimentação, entre outras taxas de processos."
                            />
                            <ItemServico 
                                index="2"
                                title="Via consular - Convocados pelo consulado italiano"
                                text="O reconhecimento via consular pode ser feito diretamente com qualquer consulado italiano no mundo, desde que ele atenda sua região de residência. Costuma ter uma fila de espera, e é necessário ser convocado para entregar a documentação."
                            />
                            <ItemServico 
                                index="3"
                                title="Via judicial - Materna (Lei de 1948) e contra-fila consular"
                                text="É a via na qual o reconhecimento consegue ser feito de forma familiar, sem necessidade de viagens. Na 3RICIAS, nosso time de advogados cuida de toda a burocracia para você e será representado através de procuração no Tribunal de Roma."
                            />
                        </List>
                    </FlexRow>
                    <div>
                        <img className="img-fluid" width={463} height={460} src="/images/closeup-woman-holding-reading-document.png" />
                    </div>
                </FlexColumn>
            </Content.Servicos>
            </Content>
        </Wrapper>    
    )
}