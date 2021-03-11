import { Wrapper, SelosContainer } from './styles'
import Text from '../../../styles/text/'

export default function Certificados() {
    return (
        <Wrapper>
            <Wrapper.Content>
                <Text.Title weight="700" size="40px" line="56px">Sempre prezamos <span>por você!</span></Text.Title>
                <Text className="pt-3">Nossa maior honra é o reconhecimento de um trabalho que <br /> fazemos com tanto carinho para vocês.</Text>
            </Wrapper.Content>
            <Wrapper.Content className="pt-5">
                <SelosContainer>
                    <img width="211.53" height="180.79" className="img-fluid" src="images/selo1.jpg" alt="premio-exelencia-qualidade" />
                    <img width="177.18" height="178.98" className="img-fluid" src="images/selo2.png" alt="latin-american-quality-institute"/>
                    <img width="174.41" height="171.88" className="img-fluid" src="images/selo3.png" alt="verificada-por-reclame-aqui" />
                </SelosContainer>
            </Wrapper.Content>
        </Wrapper>
    )
}