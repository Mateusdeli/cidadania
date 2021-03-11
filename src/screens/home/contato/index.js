import { Background,  Wrapper, Icon, List, Map} from './styles'
import Modal from '../../../styles/modal/'
import Text from '../../../styles/text/'
import IconLink from '../../../components/icon/link/'
import { FlexColumn, FlexRow } from '../../../styles/flex/'
import { ContatoForm } from '../../../components/forms/contato/'

export default function Contato() {
    return(
        <>
            <Wrapper>
                <Background />
                <Modal top="2499px" left="390px" width="600px" height="645px">
                    <Modal.Content paddingTop="52px" paddingLeft="40px" paddingBottom="41px" paddingRight="40px">
                        <Text.Title weight="700" size="28px" line="40px">Entre em contato</Text.Title>
                        <ContatoForm />
                    </Modal.Content>
                </Modal>
                <Modal top="2499px" left="1046px" width="484px" height="645px">
                    <List>
                        <List.Item>
                            <FlexColumn>
                                <Icon image="locationIcon.png" />
                                <FlexRow>
                                    <Text.Span font="Assistant" size="18" weight="400" line="28px">Rua Nestor de Barros, 116 - Sala 65</Text.Span>
                                    <Text.Span font="Assistant" size="18" weight="400" line="28px">Tatuapé - São Paulo / SP (CEP: 03325-050)</Text.Span>
                                </FlexRow>
                            </FlexColumn>
                        </List.Item>
                        <List.Divisor />
                        <List.Item>
                            <FlexColumn>
                                <Icon image="email.png" />
                                <FlexRow>
                                    <Text.Span font="Assistant" size="18" weight="400" line="28px">contato@3ricias.com.br</Text.Span>
                                </FlexRow>
                            </FlexColumn>
                        </List.Item>
                        <List.Divisor />
                        <List.Item>
                            <FlexColumn>
                                <FlexColumn align="center" className="pr-5">
                                    <Icon image="phone.png" />
                                    <Text.Span font="Assistant" size="18" weight="400" line="28px">(11) 2384-2415</Text.Span>
                                </FlexColumn>
                                <FlexColumn align="center">
                                    <Icon image="whatsapp.png" />
                                    <Text.Span font="Assistant" size="18" weight="400" line="28px">(11) 94776-6841</Text.Span>
                                </FlexColumn>
                            </FlexColumn>
                        </List.Item>
                        <List.Divisor />
                        <List.Item>
                            <FlexRow>
                                <Text.Span font="Assistant" size="14" weight="400" line="28px">Redes socias</Text.Span>
                                <FlexColumn className="pt-2">
                                    <IconLink className="mr-3" href="https://www.facebook.com/3RICIAS/" image="facebook.png" />
                                    <IconLink className="mr-3" href="https://www.instagram.com/3ricias/" image="instagram.png" />
                                    <IconLink className="mr-3" href="https://www.linkedin.com/company/3ricias/about/" image="linkedin.png" />
                                </FlexColumn>
                            </FlexRow>
                        </List.Item>
                        <List.Item>
                            <Map>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.860732422808!2d-46.559546!3d-23.552982000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e867e61b7e5%3A0x5c3d91afbfe2cb12!2sR.%20Nestor%20de%20Barros%2C%20116%20-%20Vila%20Santo%20Estev%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003325-050!5e0!3m2!1spt-BR!2sbr!4v1613875385969!5m2!1spt-BR!2sbr" width="413" height="161" style={{border:0}}  loading="lazy"></iframe>
                            </Map>
                        </List.Item>
                    </List>
                </Modal>
            </Wrapper>
        </>
    ) 
}