import { Wrapper, Background, InfoContent } from './styles'
import BackgroundMask from '../../../styles/backgroundmask/'
import Text from '../../../styles/text/'
import Button from '../../../styles/button/'
import Link from 'next/link'


export default function Midia() {
    return (
        <Wrapper>
            <Background image="midia-background.png">
                <BackgroundMask.Image image="backgroundyellow-midia.png">
                    <Wrapper.Content>
                        <InfoContent>
                            <Text.Title weight="700" size="40" line="54.47px">3RICIAS na mídia</Text.Title>
                            <Text weight="400" size="18" line="24.51px">Dê uma olhada no que falam da gente na mídia :)</Text>
                            <div className="pt-4">
                                <Link href="/">
                                    {<Button width="214px" height="40px">Visitar página</Button>}
                                </Link>
                            </div>
                        </InfoContent>
                    </Wrapper.Content>
                </BackgroundMask.Image>
            </Background>
        </Wrapper>
    )
}