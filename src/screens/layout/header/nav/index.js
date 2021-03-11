import React from 'react'
import Link from 'next/link'
import { Wrapper, Logo, Content } from './styles'
import { Navbar, Nav } from 'react-bootstrap'
import { Dropdown } from './Dropdown'

export default function Navigation() {
  return (
   <>
     <Wrapper>
      {/* <Navbar bg="light" expand="lg"> */}
        <Content>
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Dropdown />
                <Link href="/">
                    {
                      <a>
                        <Logo src="images/Logo.png" />
                      </a>
                    }
                  </Link>
                <div>
                  <Link href="/quem-somos">
                    {
                      <Nav.Link href="/quem-somos">Quem somos</Nav.Link>
                    }
                  </Link>
                </div>
                <div>
                  <Link href="/servicos">
                    {
                      <Nav.Link href="/servicos">Serviços</Nav.Link>
                    }
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Content>
     </Wrapper>
   </>
  )
}