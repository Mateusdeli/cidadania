import React from 'react'
import { Wrapper, BackgroundBar, Content, ButtonProposta } from './styles'
import InformationItem from '../../../components/informationitem/'
import Text from '../../../styles/text/'

export default function Informacoes() {
    return(
        <Wrapper>
            <BackgroundBar color="true">
                <Content>
                    <section id="analise-documentos">
                        <InformationItem
                          image="icon1.png" 
                          title="Análise de documentos"
                          text="Após a expedição, nossa equipe técnica faz uma minuciosa análise e avaliação dos documentos, com advogados no Brasil e na Itália, que cuidarão de qualquer detalhe, como inconsistências ou correções necessárias." 
                        />
                    </section>
                    <section id="pesquisa-busca-documentos">
                        <InformationItem
                          image="icon2.png" 
                          title="Pesquisa e busca de documentos"
                          text="É essencial, e também fica por conta do nosso time de pesquisadores e genealogistas especialistas em árvore genealógica e também com nossos correspondentes para a expedição dos documentos necessários na Itália!" 
                        />
                    </section>
                    <section id="montagem-pasta-processo">
                      <InformationItem
                          image="icon3.png" 
                          title="Montagem da pasta para o processo"
                          text="Esta etapa, uma das mais importantes, fica por conta de nossa equipe no Brasil, que cuida de todo o preparo da documentação, tanto nacional quanto internacional, necessária no processo. A pasta é montada seguindo todos aqueles detalhes técnicos, necessários para agilizar o pedido — e o melhor, sem burocracia para você!" 
                      />
                    </section>
                </Content>
            </BackgroundBar>
            <BackgroundBar>
                <Content>
                    <section id="retificacoes-administrativas-judiciais">
                        <InformationItem
                            image="icon4.png" 
                            title="Retificações administrativas e judiciais"
                            text="Com nosso time de especialistas nacionais e internacionais, qualquer correção (retificação) necessária fica mais rápida e fácil, sem aquela dor de cabeça de ter que se preocupar se toda a papelada está certa." 
                        />
                    </section>
                    <section id="traducao-juramentada">
                        <InformationItem
                            image="icon5.png" 
                            title="Tradução juramentada"
                            text="A 3RICIAS conta com profissionais concursados e registrados e juramentados pelo JUCESP, para que o documento tenha total legalidade, sendo ele um dos processos mais complexos do pedido de cidadania." 
                        />
                    </section>
                    <section id="apostilamento-haia">
                        <InformationItem
                            image="icon6.png" 
                            title="Apostilamento de HAIA"
                            text="O apostilamento é um tipo de “validação” que autentica a origem de documentos públicos, permitindo que sejam utilizados em outros países. E é claro, a gente cuida de tudo para você." 
                        />
                    </section>
                </Content>
            </BackgroundBar>
            <BackgroundBar color="true">
                <Content>
                    <section id="cidadania-italiana-matrimonio">
                        <InformationItem
                            image="icon7.png" 
                            title="Cidadania italiana por matrimônio"
                            text="É aquela conseguida quando se está casado com um(a) italiano(a) há pelo menos três anos — ou um ano e meio, caso o casal tenha pelo menos um filho. É obrigatório, porém, provar o conhecimento da língua italiana." 
                        />
                    </section>
                    <section id="inscricao-fast-it">
                        <InformationItem
                            image="icon8.png" 
                            title="Inscrição no Fast-it (AIRE)"
                            text="O AIRE, sigla de Anagrafe Italiani Residenti all'Estero, é um sistema de cadastro que contém todas as informações básicas dos italianos que residem no exterior. O Fast-IT é a plataforma na qual é possível manter o AIRE atualizado — essencial para a manutenção da cidadania italiana." 
                        />
                    </section>
                    <section id="cadastro-consular-atualizacao">
                        <InformationItem
                            image="icon9.png" 
                            title="Cadastro consular e atualização (AIRE)"
                            text="Tão importante quanto conseguir a cidadania italiana, a atualização dos dados no AIRE é indispensável para conseguir fazer pedidos de renovação do seu passaporte e da sua carteira de identidade italiana, bem como participar de eleições italianas, estando no exterior. E 3RICIAS cuida disso para você também!" 
                        />
                    </section>
                </Content>
            </BackgroundBar>
            <BackgroundBar>
                <Content>
                    <section id="registro-filhos-menores-idade">
                        <InformationItem
                            image="icon10.png" 
                            title="Registros de filhos menores de idade"
                            text="Cuidando de todos os detalhes necessários, a 3RICIAS cuida de toda a burocracia necessária para deixar sua família e seus direitos em dia com o governo italiano. Sua única preocupação vai ser em aproveitar a vida nova!" 
                        />
                    </section>
                    <section id="mentoria-passaporte-italiano">
                        <InformationItem
                            image="icon11.png" 
                            title="Mentoria para passaporte italiano"
                            text="Na 3RICIAS, você fica por dentro de todos aqueles detalhes minuciosos e entrelinhas que, muitas vezes, podem te pegar de surpresa na hora de solicitar o passaporte italiano. Surpresa, com a gente, só se for boa!" 
                        />
                    </section>
                    <section id="consultoria-cidadania-italiana">
                        <InformationItem
                            image="icon12.png" 
                            title="Consultoria para cidadania italiana"
                            text="Ainda não tem certeza se tem o direito à cidadania italiana? Ou simplesmente não tem certeza se vale a pena? Então a gente te explica direitinho, passo a passo, todo o processo, para que você faça a melhor escolha possível para seu futuro e o de sua família." 
                        />
                    </section>
                </Content>
            </BackgroundBar>
            <BackgroundBar color="true">
                <Content>
                    <section id="validacao-diplomas">
                        <InformationItem
                            image="icon13.png" 
                            title="Validação de diplomas"
                            text="Um processo que pode ser considerado difícil por muitos, a validação de diplomas acontece de forma rápida e descomplicada na 3RICIAS, para que você possa exercer sua profissão onde quer que seja." 
                        />
                    </section>
                    <section id="validacao-cnh-italia">
                        <InformationItem
                            image="icon14.png" 
                            title="Validação de CNH na Itália"
                            text="Desde 2018 é possível converter de maneira rápida e fácil a CNH na “patente di guida”, o documento de habilitação italiano. Com a 3RICIAS, é claro, o processo fica ainda menos burocrático." 
                        />
                    </section>
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