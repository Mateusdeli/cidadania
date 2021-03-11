import { useRouter } from 'next/router'
import { NavDropdown, Row, Col } from 'react-bootstrap'
import DropdownItem from '../../../../../components/dropdown/item'
import useDropdown from '../../../../../hooks/useDropdown'

export const Dropdown = () => {
		const [dropdownStateItaliana, openDropdownItaliana, closeDropdownItaliana] = useDropdown()
  	const [dropdownStatePortuguesa, openDropdownPortuguesa, closeDropdownPortuguesa] = useDropdown()
  	const router = useRouter()

		function handlePushCidadaniaItalianaPage() {
			if (router.route !== "/cidadania-italiana") {
				router.push("/cidadania-italiana")
				return
			}
		}

		function handlePushCidadaniaPortuguesaPage() {
			if (router.route !== "/cidadania-portuguesa") {
				router.push("/cidadania-portuguesa")
				return
			}
			
		}

    return (
			<>
        <NavDropdown 
					onClick={handlePushCidadaniaPortuguesaPage} 
					show={dropdownStatePortuguesa} 
					onMouseEnter={openDropdownPortuguesa} 
					onMouseLeave={closeDropdownPortuguesa} 
					title="Cidadania Portuguesa"
					id="basic-nav-dropdown">
					<DropdownItem href="/cidadania-portuguesa#assentos-certidoes" text="Busca de assentos e certidões no Brasil e em Portugal" />
					<DropdownItem href="/cidadania-portuguesa#retificacao-documentos" text="Retificação de documentos" />
					<DropdownItem href="/cidadania-portuguesa#transcricao-casamento" text="Transcrição de casamento" />
					<DropdownItem href="/cidadania-portuguesa#acoes-judiciais" text="Ações judiciais em Portugal" />
					<DropdownItem href="/cidadania-portuguesa#setenca-estrangeira" text="Revisão de sentença estrangeira" />
					<DropdownItem href="/cidadania-portuguesa#conta-bancaria" text="Investimentos e abertura de conta bancária" />
					<DropdownItem href="/cidadania-portuguesa#real-state" text="Real State (Imobiliário)" />
        </NavDropdown>
        <NavDropdown 
					show={dropdownStateItaliana} 
					onClick={handlePushCidadaniaItalianaPage} 
					onMouseEnter={openDropdownItaliana} 
					onMouseLeave={closeDropdownItaliana} 
					title="Cidadania Italiana"
					id="basic-nav-dropdown">
					<Row style={{ width: '600px' }}>
							<Col xs={6}>
							<DropdownItem href="/cidadania-italiana#reconhecimento-cidadania-italiana" text="Reconhecimento da cidadania italiana" />
							<DropdownItem href="/cidadania-italiana#analise-documentos" text="Análise de documentos" />
							<DropdownItem href="/cidadania-italiana#pesquisa-busca-documentos" text="Pesquisa e busca de documentos" />
							<DropdownItem href="/cidadania-italiana#montagem-pasta-processo" text="Montagem de pasta para o processo" />
							<DropdownItem href="/cidadania-italiana#cidadania-italiana-matrimonio" text="Cidadania italiana por matrimônio" />
							<DropdownItem href="/cidadania-italiana#inscricao-fast-it" text="Inscrição no Fast-it (AIRE)" />
							<DropdownItem href="/cidadania-italiana#cadastro-consular-atualizacao" text="Cadastro consular e atualização (AIRE)" />
							<DropdownItem href="/cidadania-italiana#registro-filhos-menores-idade" text="Registro de filhos menores de idade" />
							<DropdownItem href="/cidadania-italiana#mentoria-passaporte-italiano" text="Mentoria para passaporte italiano" />
							</Col>
							<Col xs={6}>
							<DropdownItem href="/cidadania-italiana#consultoria-cidadania-italiana" text="Consultoria para cidadania italiana" />
							<DropdownItem href="/cidadania-italiana#retificacoes-administrativas-judiciais" text="Retificações administrativas e judicias" />
							<DropdownItem href="/cidadania-italiana#traducao-juramentada" text="Tradução juramentada" />
							<DropdownItem href="/cidadania-italiana#apostilamento-haia" text="Apostilamento de HAIA" />
							<DropdownItem href="/cidadania-italiana#validacao-diplomas" text="Validação de diplomas" />
							<DropdownItem href="/cidadania-italiana#validacao-cnh-italia" text="Validação de CNH na Itália" />
							</Col>
					</Row>
        </NavDropdown>
			</>
    )
}