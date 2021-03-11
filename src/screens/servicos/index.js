import React from 'react'
import styled from 'styled-components'
import { Header } from './header/'
import { Uniao } from './uniao/'
import { Eua } from './eua/'
import { Seguranca } from './seguranca/'
import { Servico } from './servico/'

const Wrapper = styled.div`
    position: relative;
    width: ${({ theme }) => theme.root.servicos.width}px;
    height: ${({ theme }) => theme.root.servicos.height}px;
`;

export default function ServicosScreen() {
    return(
        <Wrapper>
          <Header />
          <Uniao />
          <Eua />
          <Seguranca />
          <Servico />
        </Wrapper>
    )
}