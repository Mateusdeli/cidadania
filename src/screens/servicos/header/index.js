import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import BackgroundMask from '../../../styles/backgroundmask/'
import Text from '../../../styles/text/'

const Background = styled.div`
    position: relative;
    width: 1920px;
    height: 560px;
    background: url("images/servicosBanner.png") no-repeat;
`;

const Content = styled(Container)`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    text-align: center;
`;

Content.Title = styled(Text.Title)`
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 24px;
`;

Content.Text = styled(Text)`
    color: ${({ theme }) => theme.colors.white};
    font-family: "Open Sans" sans-serif;
`;

Content.Wrapper = styled.div`
    width: 793px;
    height: 221px;
    padding: 75px 0;
`;

export const Header = () => {
    return(
        <Background>
            <BackgroundMask>
                <Content>
                    <Content.Wrapper>
                        <Content.Title weight="700" line="52px">Serviços  de consultoria Empresarial e Pessoal – UE E USA</Content.Title>
                        <Content.Text weight="400" line="28px">
                          O maior e mais confiável grupo de Consultoria Especializada para UE e EUA.
                          Na 3RICIAS você encontra o melhor caminho, com todo conforto e segurança para ingressar no mercado Europeu e Estados Unidos da América.
                        </Content.Text>
                    </Content.Wrapper>
                </Content>
            </BackgroundMask>
        </Background>
    )
}