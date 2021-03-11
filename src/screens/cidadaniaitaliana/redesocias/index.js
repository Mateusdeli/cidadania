import React from 'react'
import { Wrapper, Title, Content } from './styles'
import { FlexColumn } from '../../../styles/flex/'
import IconLink from '../../../components/icon/link/'

export default function RedeSociais() {
    return(
        <Wrapper>
            <Title weight="700" size="36px" line="44px">
                Acompanhe nossas <span>redes sociais</span>
                <FlexColumn className="mt-2">
                    <IconLink className="mr-3" href="https://www.facebook.com/3ricias.cidadaniaitaliana" image="facebook.png" />
                    <IconLink className="mr-3" href="https://www.instagram.com/3ricias.cidadaniaitaliana/" image="instagram.png" />
                    <IconLink href="https://www.linkedin.com/company/3riciascidadaniaitaliana/" image="linkedin.png" />
                </FlexColumn>
                <Content>
                    <iframe src="https://snapwidget.com/embed/918119" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{border:'none', overflow:'hidden',  width:'1230px', height:'410px'}}></iframe>
                </Content>
            </Title>
        </Wrapper>
    )
}