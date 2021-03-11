import React from 'react'
import { List } from './styles'
import { Modal as ModalContainer } from 'react-bootstrap'
import Button from '../../../styles/button/'

export default function Modal({ open, closeModal}) {
    return (
    <ModalContainer
        show={open}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <ModalContainer.Header className="d-flex justify-content-center">
            <ModalContainer.Title  id="contained-modal-title-vcenter">
                <span>POLÍTICA DE PRIVACIDADE</span>
            </ModalContainer.Title>
        </ModalContainer.Header>
        <ModalContainer.Body>
            <table>
                <tbody>
                    <tr>
                      <td>
                        Este site é mantido e operado por 3RICIAS Consultoria e Assessoria para
                        Administração de Negócios EIRELI.
                        Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que
                        utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e
                        estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de
                        Proteção de Dados Pessoais - LGPD).
                        Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos
                        esta política de privacidade, que contém informações importantes sobre:
                        <List>
                            <br />
                            <li>- Quem deve utilizar nosso site</li>
                            <li>- Quais dados coletamos e o que fazemos com eles;</li>
                            <li>- Seus direitos em relação aos seus dados pessoais; e</li>
                            <li>- Como entrar em contato conosco.</li>
                            <br />
                        </List>
                        <List paddingLeft>
                            <li>
                                <strong>1. Quem deve utilizar nosso site</strong>
                                <p className="pt-2">Nosso site só deve ser utilizado por pessoas com mais de dezoito anos de idade. Sendo assim, crianças e adolescentes não devem utilizá-lo.</p>
                            </li>
                            <li>
                                <strong>2. Dados que coletamos e motivos da coleta</strong>
                                <p className="pt-2">Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo como disposto nesta seção.</p>
                                <p><i>1. Dados pessoais fornecidos expressamente pelo usuário</i></p>
                                <p>Nós coletamos os seguintes dados pessoais que nossos usuários nos fornecem expressamente ao utilizar nosso site:</p>
                                <List>
                                    <li>- Nome completo</li>
                                    <li>- Endereço de e-mail</li>
                                    <li>- Número de telefone</li>
                                    <li>- Mensagens de contato</li>
                                </List>
                                <br />
                                <p>A coleta destes dados ocorre nos seguintes momentos:</p>
                                <List>
                                    <li>- Quando o usuário utiliza o formulário de contato.</li>
                                </List>
                                <br />
                                <p>Os dados fornecidos por nossos usuários são coletados com as seguintes finalidades:</p>
                                <List>
                                    <li>- Para que o usuário possa entrar em contato para contratar nossos serviços</li>
                                </List>
                                <br />
                                <p><i>2. Dados sensíveis</i></p>
                                <p><strong>Não</strong> serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles
                                   definidos nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim,
                                   <strong> não</strong> haverá coleta de dados sobre origem racial ou étnica, convicção religiosa,
                                   opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico
                                   ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico,
                                   quando vinculado a uma pessoa natural.</p>
                                <p><i>3. Cookies</i></p>
                                <p>Cookies são pequenos arquivos de texto baixados automaticamente em seu
                                    dispositivo quando você acessa e navega por um site. Eles servem, basicamente,
                                    para seja possível identificar dispositivos, atividades e preferências de usuários.</p>
                                <p>Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do
                                    disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha
                                    acesso a informações pessoais que não tenham partido do usuário ou da forma
                                    como utiliza os recursos do site.</p>
                                <List>
                                    <li><i>a. Cookies de terceiros</i></li>
                                </List>
                                <br />
                                <p>Alguns de nossos parceiros podem configurar cookies nos dispositivos dos usuários que acessam nosso site.</p>
                                <p>Estes cookies, em geral, visam possibilitar que nossos parceiros possam oferecer
                                   seu conteúdo e seus serviços ao usuário que acessa nosso site de forma
                                   personalizada, por meio da obtenção de dados de navegação extraídos a partir de
                                   sua interação com o site.</p>
                                <p>O usuário poderá obter mais informações sobre os cookies de terceiro e sobre a
                                   forma como os dados obtidos a partir dele são tratados, além de ter acesso à
                                   descrição dos cookies utilizados e de suas características, acessando o seguinte
                                   link:</p>
                                <List>
                                    <li>- Google Analytics;</li>
                                    <li>- RD Station</li>
                                </List>
                                <br />
                                <p>As entidades encarregadas da coleta dos cookies poderão ceder as informações obtidas a terceiros.</p>
                                <List>
                                    <li><i>b. Gestão de cookies</i></li>
                                </List>
                                <br />
                                <p>O usuário poderá se opor ao registro de cookies pelo site, bastando que desative
                                   esta opção no seu próprio navegador. Mais informações sobre como fazer isso em
                                   alguns dos principais navegadores utilizados hoje podem ser acessadas a partir dos
                                   seguintes links:
                                </p>
                                <List>
                                    <li>Internet Explorer:<br /><a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-deletemanage-cookies">https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-deletemanage-cookies</a></li><br />
                                    <li>Safari:<br /><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac">https://support.apple.com/pt-br/guide/safari/sfri11471/mac</a></li><br />
                                    <li>Google Chrome:<br /><a href="https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt">https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt</a></li><br />
                                    <li>Mozila Firefox:<br /><a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usa">https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usa</a></li><br />
                                    <li>Opera:<br /><a href="https://www.opera.com/help/tutorials/security/privacy/">https://www.opera.com/help/tutorials/security/privacy/</a></li>
                                </List>
                                <br />
                                <p>A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas
                                    ferramentas e funcionalidades do site, comprometendo seu correto e esperado
                                    funcionamento. Outra consequência possível é remoção das preferências do usuário
                                    que eventualmente tiverem sido salvas, prejudicando sua experiência.
                                </p>
                                <p><i>4. Coleta de dados não previstos expressamente</i></p>
                                <p>Eventualmente, outros tipos de dados não previstos expressamente nesta Política
                                    de Privacidade poderão ser coletados, desde que sejam fornecidos com o
                                    consentimento do usuário, ou, ainda, que a coleta seja permitida com fundamento
                                    em outra base legal prevista em lei.
                                </p>
                                <p>
                                    Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes
                                    serão informadas aos usuários do site.
                                </p>
                            </li>
                            <li>
                                <p><strong>3. Compartilhamento de dados pessoais com terceiros</strong></p>
                                <p>Nós não compartilhamos seus dados pessoais com terceiros. Apesar disso, é
                                    possível que o façamos para cumprir alguma determinação legal ou regulatória, ou,
                                    ainda, para cumprir alguma ordem expedida por autoridade pública.
                                </p>
                            </li>
                            <li>
                                <p><strong>4. Por quanto tempo seus dados pessoais serão armazenados</strong></p>
                                <p>Os dados pessoais coletados pelo site são armazenados e utilizados por período de
                                    tempo que corresponda ao necessário para atingir as finalidades elencadas neste
                                    documento e que considere os direitos de seus titulares, os direitos do controlador
                                    do site e as disposições legais ou regulatórias aplicáveis.
                                </p>
                                <p>
                                  Uma vez expirados os períodos de armazenamento dos dados pessoais, eles são
                                  removidos de nossas bases de dados ou anonimizados, salvo nos casos em que
                                  houver a possibilidade ou a necessidade de armazenamento em virtude de
                                  disposição legal ou regulatória.
                                </p>
                            </li>
                            <li>
                                <p><strong>5. Bases legais para o tratamento de dados pessoais</strong></p>
                                <p>
                                  Uma base legal para o tratamento de dados pessoais nada mais é que um
                                  fundamento jurídico, previsto em lei, que justifica o justifica. Assim, cada operação
                                  de tratamento de dados pessoais precisa ter uma base legal a ela correspondente.
                                </p>
                                <p>Nós tratamos os dados pessoais de nossos usuários nas seguintes hipóteses:</p>
                                <List>
                                    <li>- mediante o consentimento do titular dos dados pessoais</li>
                                    <li>- para o cumprimento de obrigação legal ou regulatória pelo controlador</li>
                                </List>
                                <br />
                                <p><i>1. Consentimento</i></p>
                                <p>Determinadas operações de tratamento de dados pessoais realizadas em nosso site
                                    dependerão da prévia concordância do usuário, que deverá manifestá-la de forma
                                    livre, informada e inequívoca.
                                </p>
                                <p>O usuário poderá revogar seu consentimento a qualquer momento, sendo que, não
                                    havendo hipótese legal que permita ou que demande o armazenamento dos dados,
                                    os dados fornecidos mediante consentimento serão excluídos.
                                </p>
                                <p>Além disso, se desejar, o usuário poderá não concordar com alguma operação de
                                    tratamento de dados pessoais baseada no consentimento. Nestes casos, porém, é
                                    possível que não possa utilizar alguma funcionalidade do site que dependa daquela
                                    operação. As consequências da falta de consentimento para uma atividade
                                    específica são informadas previamente ao tratamento.
                                </p>
                                <p><i>2. Cumprimento de obrigação legal ou regulatória pelo controlador</i></p>
                                <p>Algumas operações de tratamento de dados pessoais, sobretudo o armazenamento
                                    de dados, serão realizadas para que possamos cumprir obrigações previstas em lei
                                    ou em outras disposições normativas aplicáveis às nossas atividades.
                                </p>
                            </li>
                            <li>
                                <p><strong>6. Direitos do usuário</strong></p>
                                <p>O usuário do site possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais:</p>
                                <List>
                                    <li>- confirmação da existência de tratamento;</li>
                                    <li>- acesso aos dados;</li>
                                    <li>- correção de dados incompletos, inexatos ou desatualizados;</li>
                                    <li>- anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na lei;</li>
                                    <li>- portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</li>
                                    <li>- eliminação dos dados pessoais tratados com o consentimento do titular, exceto nos casos previstos em lei;</li>
                                    <li>- informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
                                    <li>- informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
                                    <li>- revogação do consentimento.</li>
                                </List>
                                <br />
                                <p>É importante destacar que, nos termos da LGPD, não existe um direito de
                                    eliminação de dados tratados com fundamento em bases legais distintas do
                                    consentimento, a menos que os dados seja desnecessários, excessivos ou tratados
                                    em desconformidade com o previsto na lei.
                                </p>
                                <p><i>1. Como o titular pode exercer seus direitos</i></p>
                                <p>Para garantir que o usuário que pretende exercer seus direitos é, de fato, o titular
                                    dos dados pessoais objeto da requisição, poderemos solicitar documentos ou outras
                                    informações que possam auxiliar em sua correta identificação, a fim de resguardar
                                    nossos direitos e os direitos de terceiros. Isto somente será feito, porém, se for
                                    absolutamente necessário, e o requerente receberá todas as informações
                                    relacionadas.
                                </p>
                            </li>
                            <li>
                                <p><strong>7. Medidas de segurança no tratamento de dados pessoais</strong></p>
                                <p>Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais
                                    de acessos não autorizados e de situações de destruição, perda, extravio ou
                                    alteração desses dados.
                                </p>
                                <p>As medidas que utilizamos levam em consideração a natureza dos dados, o contexto
                                    e a finalidade do tratamento, os riscos que uma eventual violação geraria para os
                                    direitos e liberdades do usuário, e os padrões atualmente empregados no mercado
                                    6/7 por empresas semelhantes à nossa.
                                </p>
                                <p>Entre as medidas de segurança adotadas por nós, destacamos as seguintes:</p>
                                <List>
                                    <li>Restrições de acessos aos servidores in cloud.</li>
                                </List>
                                <br />
                                <p>Ainda que adote tudo o que está ao seu alcance para evitar incidentes de
                                    segurança, é possível que ocorra algum problema motivado exclusivamente por um
                                    terceiro - como em caso de ataques de hackers ou crackers ou, ainda, em caso de
                                    culpa exclusiva do usuário, que ocorre, por exemplo, quando ele mesmo transfere
                                    seus dados a terceiro. Assim, embora sejamos, em geral, responsáveis pelos dados
                                    pessoais que tratamos, nos eximimos de responsabilidade caso ocorra uma situação
                                    excepcional como essas, sobre as quais não temos nenhum tipo de controle.
                                </p>
                                <p>De qualquer forma, caso ocorra qualquer tipo de incidente de segurança que possa
                                    gerar risco ou dano relevante para qualquer de nossos usuários, comunicaremos os
                                    afetados e a Autoridade Nacional de Proteção de Dados acerca do ocorrido, em
                                    conformidade com o disposto na Lei Geral de Proteção de Dados.
                                </p>
                            </li>
                            <li>
                                <p><strong>8. Reclamação a uma autoridade de controle</strong></p>
                                <p>Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os titulares
                                    de dados pessoais que se sentirem, de qualquer forma, lesados, podem apresentar
                                    reclamação à Autoridade Nacional de Proteção de Dados.
                                </p>
                            </li>
                            <li>
                                <p><strong>9. Alterações nesta política</strong></p>
                                <p>A presente versão desta Política de Privacidade foi atualizada pela última vez em: 22/02/2021.</p>
                                <p>Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas,
                                    especialmente para adaptá-las às eventuais alterações feitas em nosso site, seja
                                    pela disponibilização de novas funcionalidades, seja pela supressão ou modificação
                                    daquelas já existentes.
                                </p>
                                <p>Sempre que houver uma modifição, nossos usuários serão notificados acerca da mudança.</p>
                            </li>
                            <li>
                                <p><strong>10. Como entrar em contato conosco</strong></p>
                                <p>Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato com nosso Encarregado de Proteção de Dados Pessoais, por algum dos canais mencionados abaixo:</p>
                                <List>
                                    <li>E-mail: contato@3ricias.com.br</li>
                                    <li>Telefone: +55 11 94776-6841</li>
                                    <li>Endereço postal: Rua Nestor de Barros, 116 - Sala 65 - Vila Santo Estevão - CEP: 03325-050 - São Paulo/SP - Brasil</li>
                                </List>
                            </li>
                        </List>
                      </td>
                    </tr>
                </tbody>
            </table>
        </ModalContainer.Body>
        <ModalContainer.Footer>
            <Button onClick={closeModal}>Concordo</Button>
        </ModalContainer.Footer>
        </ModalContainer>
    )
}