import React from 'react'
import { Container } from 'react-bootstrap'
import BackgroundMask from '../../../styles/backgroundmask/'
import { Background, Content, Flag } from './styles'

export default function CidadaniaItalianaScreen() {
    return(
        <>
          <Background>
            <BackgroundMask image="shadow.png">
                <Content>
                    <Content.Wrapper>
                        <Content.Title weight="700" line="52px">Cidadania Italiana</Content.Title>
                        <Content.Text weight="400" line="28px">
                          Você tem direito a Cidadania Italiana e não sabe por onde <br />começar? 
                          Nós da 3RICIAS podemos te ajudar com tudo! <br /> 
                          Desde o início até o final do processo.
                        </Content.Text>
                    </Content.Wrapper>
                    <Content.Flag>
                        <img width={54} height={66} src="/images/italy-flag-full.png" />
                    </Content.Flag>
                </Content>
            </BackgroundMask>
        </Background>
        </>
    )
}