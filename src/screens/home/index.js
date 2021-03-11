import HomeCarousel from './carousel/'
import QuemSomos from './quemsomos/'
import Servicos from './servicos/'
import Contato from './contato/'
import Wrapper from './styles'

export default function HomeScreen() {
    return (
      <>
        <Wrapper>
          <HomeCarousel />
          <QuemSomos />
          <Servicos />
          <Contato />
        </Wrapper>
      </>
    )
}