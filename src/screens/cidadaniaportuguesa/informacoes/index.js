import React from 'react'
import { Wrapper, BackgroundBar, Content, ButtonProposta } from './styles'
import InformationItem from '../../../components/informationitem/'
import Text from '../../../styles/text/'

export default function Informacoes() {
    return(
        <Wrapper>
            <BackgroundBar color="true">
                <Content>
                    <section id="assentos-certidoes">
                      <InformationItem
                          
                          image="icon16.png" 
                          title="Busca assento e certidões no Brasil e em Portugal"
                          text="Com um processo de busca exclusivo e profissional em Portugal, a 3RICIAS consegue agilizar o andamento do que antes era visto como dor de cabeça e preocupação para que você tenha excelentes resultados com a sua cidadania." 
                      />
                    </section>

                    <section id="retificacao-documentos">
                      <InformationItem
                          image="icon17.png" 
                          title="Retificação de documentos"
                          text="A equipe de advogados, tradutores juramentados e especialistas de setores técnicos garante que sua pasta de documentos esteja seguindo todos os detalhes e requisitos para a aceitação e agilização do processo de cidadania." 
                      />
                    </section>
                    
                    <section id="transcricao-casamento">
                      <InformationItem
                          image="icon18.png" 
                          title="Transcrição de casamento"
                          text="Você sabia que é possível legalizar seu casamento oficializado no Brasil, em Portugal e vice-versa? Feito através de contato direto com os consulados, a 3RICIAS cuida para você de toda a papelada." 
                      />
                    </section>
                </Content>
            </BackgroundBar>
            <BackgroundBar>
                <Content>
                    <section id="acoes-judiciais">
                      <InformationItem
                          image="icon19.png" 
                          title="Ações judiciais em Portugal"
                          text="Com o auxílio de procurações, os profissionais da 3RICIAS em Portugal conseguem te representar em diversas ações judiciais, evitando a necessidade de gastos com passagens aéreas, hospedagem e alimentação." 
                      />
                    </section>

                    <section id="setenca-estrangeira">
                      <InformationItem
                          image="icon20.png" 
                          title="Revisão de sentença estrangeira"
                          text="Os cidadãos portugueses que se casaram, divorciaram ou faleceram no estrangeiro, devem ter transcrito estes atos no seu registro civil português.
                                Após a revisão e confirmação da sentença, o Tribunal notifica a Conservatória do Registro Civil para que seja providenciado o averbamento do divórcio no assento de nascimento e casamento do cidadão português." 
                      />
                    </section>

                    <section id="conta-bancaria">
                       <InformationItem
                           image="icon21.png" 
                           title="Investimentos e abertura de conta bancária internacional"
                           text="Variações de mercado, ações em alta, melhores fundos de investimentos: nossa equipe financeira te auxilia em todos os aspectos necessários para fazer o melhor investimento no exterior." 
                       />
                    </section>

                </Content>
            </BackgroundBar>
            <BackgroundBar color="true">
                <Content>
                    <section id="real-state">
                      <InformationItem
                          image="icon22.png" 
                          title="Real State (Imobiliário)"
                          text="De olho no mercado imobiliário, nossos profissionais te ajudam a escolher os melhores locais e empresas de investimento nas principais cidades." 
                      />
                    </section>
                    <InformationItem
                        image="icon23.png" 
                        title="Investimento em Startups e Internacionalização de Empresas em Portugal"
                        text="Golden Visa através de investimento em Startups em Portugal Internacionalizar seu negócio ou produto em Portugal." 
                    />
                    <div className="box">
                        <img className="img-fluid" src="images/icons/icon15.png" />
                        <Text.Title className="pt-3" weight="700" size="18px" line="24px">Preencha nosso<br /> formulário de propostas!</Text.Title>
                        {/* <Text className="pt-2" weight="400" size="14px" line="22px">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text> */}
                        <ButtonProposta className="mt-3">Realizar Proposta</ButtonProposta>
                    </div>
                </Content>
            </BackgroundBar>
        </Wrapper>
    )
}