import Contato from './contato'
import Info from './info'
import { Wrapper } from './styles'
import { Container } from 'react-bootstrap'

export default function Footer(){
    return(
      <Wrapper>
          <Contato />
          <hr className="mt-0"/>
          <Info />
      </Wrapper>
    )
}