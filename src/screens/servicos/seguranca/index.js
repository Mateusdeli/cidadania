import React from 'react'
import Text from '../../../styles/text/'
import styled from 'styled-components'
import BackgroundMask from '../../../styles/backgroundmask/'
import { FlexColumn } from '../../../styles/flex/'

const Wrapper = styled.div`
    position: relative;
    width: 1920px;
    height: 603px;
    top: 2250px;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: url("images/bannerServicos2.png") no-repeat;
`;

const Content = styled.div`
    position: absolute;
    left: 390px;
    display: flex;
    align-items: center;
    height: 603px;
`;

Content.Title = styled(Text.Title)`
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 24px;
    text-align: center;
`;

Content.Text = styled(Text)`
    color: ${({ theme }) => theme.colors.white};
    font-family: "Open Sans" sans-serif;
`;

Content.Wrapper = styled.div`
    width: 536px;
    height: 221px;
    padding: 15px 25px;
`;

const Flex = styled(FlexColumn)`
    justify-content: space-between;
`

export const Seguranca = () => {
    return(
        <Wrapper>
            <Background>
                <BackgroundMask.Image image="maskBackgroundServicos.png">
                    <Content>
                        <div>
                            <Content.Title weight="700" line="52px">Segurança e credibilidade <br />para seus investimentos</Content.Title>
                            <Flex>
                                <Content.Wrapper>
                                    <Content.Text weight="400" size="14px" line="28px">
                                        A 3RICIAS é formada por consultores e prestadores de serviços qualificados que, de forma coordenada, inteligente e criativa oferece, com eficácia, soluções que resultem no melhor resultado possível em seus negócios, dentro das regras legais e dos rígidos padrões de ética, a empresas, profissionais e empreendedores.
                                    </Content.Text>
                                    <Content.Text>
                                        <strong>Importante:</strong> A 3RICIAS Consultoria e Assessoria não é um escritório de advocacia e não substitui a necessidade de contratar os serviços de um escritório de advocacia ou advogado licenciado. 
                                    </Content.Text>
                                </Content.Wrapper>
                                <Content.Wrapper>
                                    <Content.Text weight="400" size="14px" line="28px">
                                        A 3RICIAS é formada por consultores e prestadores de serviços qualificados que, de forma coordenada, inteligente e criativa oferece, com eficácia, soluções que resultem no melhor resultado possível em seus negócios, dentro das regras legais e dos rígidos padrões de ética, a empresas, profissionais e empreendedores.
                                    </Content.Text>
                                </Content.Wrapper>
                            </Flex>
                        </div>
                    </Content>
                </BackgroundMask.Image>
            </Background>
        </Wrapper>
    )
}