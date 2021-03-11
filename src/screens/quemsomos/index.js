import React from 'react'
import { Wrapper } from './styles'
import Header from './header/'
import QuemSomos from './quemsomos/'
import Carousel from './carousel/'
import Equipe from './equipe/'
import Certificados from './certificados/'
import Servicos from './servicos/'
import Midia from './midia/'

export default function QuemSomosScreen() {
    return(
        <Wrapper>
          <Header />
          <QuemSomos />
          <Carousel />
          <Equipe />
          <Certificados />
          <Servicos />
          <Midia />
        </Wrapper>
    )
}