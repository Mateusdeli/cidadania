import styled from 'styled-components'
import React from 'react'
import { Modal as ModalContainer } from 'react-bootstrap'

const Container = styled(ModalContainer)`
    .modal-content {
        background-color: transparent;
        border: none;
    }
`

const Content = styled(ModalContainer.Body)`
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    height: 161px;
    width: 461px;
    border-radius: 16px !important;
`

Content.Message = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Close = styled.button`
    position: absolute;
    right: 1%;
    top: 5%;
    background: transparent;
    border: none;
    outline: transparent;
    color: white;
`

const Message = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    font-family: "Open Sans" sans-serif;
    margin-bottom: 0;
`

export const ModalContato = ({ open, closeModal}) => {
    return (
    <Container
        show={open}
        onHide={closeModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Content>
            <Close onClick={closeModal}>X</Close>
            <Content.Message>
                <div>
                  <Message>Obrigado pelo interesse</Message>
                  <Message className="pt-2">Em breve entraremos em contato!</Message>
                </div>
            </Content.Message>
        </Content>
    </Container>
    )
}