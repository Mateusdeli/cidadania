import { Container, Row, Col } from 'react-bootstrap'
import { TextName } from './styles'
import Text from '../../../../styles/text/'
import IconLink from '../../../../components/icon/link/'
import { FlexColumn } from '../../../../styles/flex/'

export default function Info() {
    return(
        <Row className="justify-content-between">
            <Col>
                <Text>3RICIAS 2021 © Todos os direitos reservados.</Text>
            </Col>
            <Col className="text-center">
                <TextName>ZANGOLBIREVE</TextName>
            </Col>
            <Col>
                <FlexColumn justify="flex-end">
                    <IconLink className="mr-3" href="https://www.facebook.com/3RICIAS/" image="facebook.png" />
                    <IconLink className="mr-3" href="https://www.instagram.com/3ricias/" image="instagram.png" />
                    <IconLink href="https://www.linkedin.com/company/3ricias/about/" image="linkedin.png" />
                </FlexColumn>
            </Col>
        </Row>
    )
}