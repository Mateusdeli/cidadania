import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../../../components/input/'
import { Form } from '../../../styles/form/'
import Button from '../../../styles/button/'
import { useModal } from '../../../hooks/useModal'
import Modal from '../../../components/modal'
import ModalPrivacidade from '../../../components/modal/modalprivacidade/'
import { ModalContato } from '../../modal/modalcontato/'

import { sendEmail } from '../../../services/emailService'
import { useFormValidation } from '../../../hooks/useFormValidation'

const ButtonContainer = styled.div`
    margin-top: 32px;
    float: right;
`;

const TermosContent = styled.div`
    display: flex;
    align-items: center;
`;

const TextTermos = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding-left: 15px;
    font-family: "Open Sans" sans-serif;
`;

export const ContatoForm = ({ from = 'contato@3ricias.com.br', to = 'contato@3ricias.com.br' }) => {
    const [ openModal, closeModal, open ] = useModal()
    const [ openModalSubmited, closeModalSubmited, openSubmited ] = useModal()

    const [name, handleNameChange, errorsName] = useFormValidation()
    const [email, handleEmailChange, errorsEmail] = useFormValidation()
    const [phone, handlePhoneChange, errorsPhone] = useFormValidation(true)
    const [message, handleMessageChange] = useFormValidation()

    const [checked, setChecked] = useState(false)
    const [privacy, setPrivacy] = useState(false)

    const route = "/api/contact"
    const privacyTrueMessage = 'Sim, estou de acordo com a política de privacidade'
    const privacyFalseMessage = 'Não estou de acordo com a política de privacidade'

    const handleOpenModal = () => {
        if (!checked) {
            openModal()
        }
        setChecked(!checked)
        setPrivacy(!checked)
    }

    const RenderModal = () => {
        return (
          <>
            {open && (
                <Modal>
                    <ModalPrivacidade open={open} closeModal={closeModal} />
                </Modal>
            )}
          </>
        )
    }

    const handleSubmit = event => {

        event.preventDefault()
        
        const payload = {
            name,
            phone,
            email,
            text: message,
            privacy: privacy ? privacyTrueMessage : privacyFalseMessage,
            to,
            from
        }
        try {
            if (errorsName || errorsEmail || errorsPhone) {
                return
            }
       
            sendEmail(route, payload)
            openModalSubmited()
            resetFields()
         
        } catch(ex) {
            return
        }
    }

    const resetFields = () => {
        handleNameChange('')
        handleEmailChange('')
        handlePhoneChange('')
        handleMessageChange('')
        setChecked(false)
        setPrivacy(false)
    }

    return (
        <>
        <Form className="pt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label weight="bold" size="16px" line="24px">Nome completo</Form.Label >
                <Input
                    placeholder="Digite o seu nome"
                    type="text"
                    name="name"
                    validate={errorsName}
                    onChange={e => handleNameChange(e)}
                    value={name}
                    width="519" 
                />
            </Form.Group>
            <Form.GroupInline>
                <Form.Group className="pr-3">
                    <Form.Label>E-mail</Form.Label>
                    <Input
                        placeholder="Digite o seu email"
                        type="email"
                        name="email"
                        value={email}
                        validate={errorsEmail}
                        onChange={e => handleEmailChange(e)}
                        width="250"
                    />
                </Form.Group>
                <Form.Group className="mr-4">
                    <Form.Label>Telefone</Form.Label>
                    <Input
                        placeholder="Digite o seu telefone"
                        type="text"
                        name="phone"
                        value={phone}
                        validate={errorsPhone}
                        onChange={e => handlePhoneChange(e)}
                        width="250"
                    />
                </Form.Group>
            </Form.GroupInline>
            <Form.Group>
                <Form.Label>Mensagem</Form.Label>
                <Form.Textarea
                    name="message"
                    height="132" 
                    width="100%"
                    value={message}
                    onChange={e => handleMessageChange(e)}
                />
            </Form.Group>
            <Form.Group className="pt-3">
                <TermosContent>
                    <RenderModal />
                    <Input checked={checked} onChange={e => setChecked(e.target.value)} type="checkbox" width="15" />
                    <TextTermos onClick={handleOpenModal}>Sim, estou de acordo com a <strong>política de privacidade.</strong></TextTermos>
                </TermosContent>
            </Form.Group> 
            <ButtonContainer>
                <Button type="submit" width="193px" height="40px">Enviar!</Button>
            </ButtonContainer>
        </Form>
            {openSubmited && <ModalContato open={openSubmited} closeModal={closeModalSubmited} />}
        </>
    )
}