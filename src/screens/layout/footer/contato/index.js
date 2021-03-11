import { Container, Row, Col } from 'react-bootstrap'
import { Wrapper, List, Icon, FlexRowContent, FlexColumnContent } from './styles'
import Button from '../../../../styles/button/'
import Link from 'next/link'

export default function Contato() {
    return(
        <Wrapper>
            <div>
                <img className="img-fluid" src="images/logoblack.png" />
            </div>
            <List>
                <List.Item>
                    <h4>Institucional</h4>
                </List.Item>
                <List.Item>
                    <Link href="/quem-somos">{<a>Quem somos</a>}</Link>
                </List.Item>
                <List.Item>
                    <Link href="#">{<a>Serviços</a>}</Link>
                </List.Item>
                <List.Item>
                    <Link href="/cidadania-portuguesa">{<a>Cidadania Portuguesa</a>}</Link>
                </List.Item>
                <List.Item>
                    <Link href="/cidadania-italiana">{<a>Cidadania Italiana</a>}</Link>
                </List.Item>
            </List>
            <List>
                <List.Item>
                    <Icon image="locationIcon.png">
                        <FlexRowContent>
                            <span>Rua Nestor de Barros, 116 - Sala 65</span>
                            <span>Tatuapé - São Paulo / SP &nbsp; CEP: 03325-050</span>
                        </FlexRowContent>
                    </Icon>
                </List.Item>
                <List.Item className="pt-4">
                    <Icon image="email.png">
                        <FlexRowContent>
                            <span>contato@3ricias.com.br</span>
                            <span>contato@3riciascidadaniaitaliana.com.br</span>
                            <span>contato@3riciascidadaniaportuguesa.com.br</span>
                        </FlexRowContent>
                    </Icon>
                </List.Item>
                <List.Item>
                    <FlexColumnContent>
                        <Icon image="phone.png">
                            <span>(11) 2384-2415</span>
                        </Icon>
                        <Icon image="whatsapp.png">
                            <span>(11) 94776-6841</span>
                        </Icon>
                    </FlexColumnContent>
                </List.Item>
            </List>
            <div>
                <Button paddingX="41" paddingY="11">Quero uma proposta</Button>
            </div>
        </Wrapper>
    )
}