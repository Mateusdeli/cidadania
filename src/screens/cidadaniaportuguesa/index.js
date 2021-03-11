import Header from './header/'
import styled from 'styled-components'
import Consultoria from './consultoria/'
import Beneficios from './beneficios/'
import Servicos from './servicos/'
import Informacoes from './informacoes/'
import Agendamento from './agendamento/'
import RedeSocias from './redesocias/'
import Formularios from './formularios/'

const Wrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.root.portuguesa.width}px;
  height: ${({ theme }) => theme.root.portuguesa.height}px;
`

export default function HomeScreen() {
    return (
      <>
        <Header />
        <Formularios />
        <Consultoria />
        <Beneficios />
        <Servicos />
        <Informacoes />
        <Agendamento />
        <RedeSocias />
      </>
    )
}