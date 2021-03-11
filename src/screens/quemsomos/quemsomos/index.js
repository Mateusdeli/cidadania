import { Wrapper, Content, Image } from './styles'
import Link from 'next/link'
import Text from '../../../styles/text/'
import Button from '../../../components/button/'
import { FlexColumn, FlexRow } from '../../../styles/flex/'

export default function QuemSomos() {
    return(
        <Wrapper>
            <FlexColumn>
                <Content>
                    <Text.Title className="pb-3" weight="700" size="40" line="56px" font="Open Sans">Quem somos</Text.Title>
                    <Text weight="400" size="16" line="32px" font="Open Sans">
                        O maior e mais confiável serviço de consultoria especializada para a UE e os EUA. <br />
                        Na 3RICIAS, mais do que um cliente, você é parte da família. Com total transparência e mínima burocracia, 
                        você encontra conosco conforto e segurança para traçar o melhor caminho para ingressar no mercado europeu ou
                        norte-americano. Cuidamos de todo o planejamento, <br /> papelada e burocracia, para que você possa conquistar o 
                        topo do <br />mercado — seja no mundo comercial, ou no ramo pessoal e familiar.
                    </Text>
                </Content>
                <Content>
                    <FlexRow align="flex-end">
                        <FlexRow align="center">
                            <Image src="images/quem-somos1.jpg" alt="cidadania-italiana" />
                            <Content.Buttons>
                                <Button image="arrowleft.png" />
                                <Button image="arrowright.png" />
                            </Content.Buttons>
                        </FlexRow>
                    </FlexRow>
                </Content>
            </FlexColumn>
        </Wrapper>
    )
}