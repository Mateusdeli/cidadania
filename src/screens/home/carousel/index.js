import BackgroundMask from '../../../styles/backgroundmask/'
import { Background, CarouselWrapper, Elipse, InfoContent } from './styles'
import Text from '../../../styles/text/'
import Button from '../../../styles/button/'
import usePushPage from '../../../hooks/usePushPage'

export default function HomeCarousel() {
    const routeCidadaniaItaliana = usePushPage('/cidadania-italiana')
    const routeCidadaniaPortuguesa = usePushPage('/cidadania-portuguesa')
    const routeServicos = usePushPage('/servicos')
    return (
        <>
          <CarouselWrapper controls={false}>
              <CarouselWrapper.Item>
                <Background className="img-fluid" img="roman-coliseum-seen-from-afar.jpg">
                        <BackgroundMask image="shadow.png">
                            <InfoContent>
                                <InfoContent.Button onClick={routeCidadaniaItaliana.handlePush}>GO ITALIA!</InfoContent.Button>
                                <Text.Title size="40px" className="pt-2" color="#FFF" weight="700" line="52px">Tudo sobre a<br/> Cidadania Italiana</Text.Title>
                                <Text size="16px" color="#FFF" weight="400">Quer conquistar sua cidadania italiana e não sabe por onde começar? Nós da <br /> 3RICIAS estamos aqui para te ajudar nesta missão. Conheça nossos serviços.</Text>
                                <Button onClick={routeCidadaniaItaliana.handlePush} className="mt-4">Quero uma proposta</Button>
                            </InfoContent>
                            <InfoContent.Image src="images/italyhome.png" />
                        </BackgroundMask>
                    </Background>
              </CarouselWrapper.Item>
              <CarouselWrapper.Item>
                <Background className="img-fluid" img="portugalbanner.png">
                    <BackgroundMask image="shadow.png">
                        <InfoContent>
                            <InfoContent.Button onClick={routeCidadaniaPortuguesa.handlePush}>GO PORTUGAL!</InfoContent.Button>
                            <Text.Title size="40px" className="pt-2" color="#FFF" weight="700" line="52px">Tudo sobre a<br/> Cidadania Portuguesa</Text.Title>
                            <Text size="16px" color="#FFF" weight="400">Você tem direito a Cidadania Portuguesa e não sabe por onde começar? Nós <br/> da 3RICIAS contamos com profissionais qualificados. O futuro é agora, entre <br/> em contato com a 3RICIAS e realize os seus sonhos.</Text>
                            <Button onClick={routeCidadaniaPortuguesa.handlePush} className="mt-4">Quero uma proposta</Button>
                        </InfoContent>
                        <InfoContent.Image src="images/portugalhome.png" />
                    </BackgroundMask>
                </Background>
              </CarouselWrapper.Item>
              <CarouselWrapper.Item>
                <Background className="img-fluid" img="bannerHomeServico.png">
                    <BackgroundMask image="shadow.png">
                        <InfoContent>
                            <InfoContent.Button onClick={routeServicos.handlePush}>ESPECIALIZADOS</InfoContent.Button>
                            <Text.Title size="40px" className="pt-2" color="#FFF" weight="700" line="52px">Serviços de consultoria empresarial e pessoal</Text.Title>
                            <Text size="16px" color="#FFF" weight="400">O maior e mais confiável grupo de Consultoria Especializada para UE e EUA.</Text>
                            <Button onClick={routeServicos.handlePush} className="mt-4">Quero conhecer</Button>
                        </InfoContent>
                    </BackgroundMask>
                </Background>
              </CarouselWrapper.Item>
          </CarouselWrapper>
        <Elipse />
        </>
    )
}