import React from 'react'
import Modal from '../../../styles/modal/'
import Text from '../../../styles/text/'
import { ContatoForm } from '../../../components/forms/contato/'

export default function Formularios() {
    return (
        <Modal top="267px" left="950px" width="600px" height="645px">
            <Modal.Content paddingTop="52px" paddingLeft="40px" paddingBottom="41px" paddingRight="40px">
                <Text.Title weight="700" size="28px" line="40px">Entre em contato</Text.Title>
                <ContatoForm 
                    from="contato@3riciascidadaniaitaliana.com.br" 
                    to="contato@3riciascidadaniaitaliana.com.br" 
                />
            </Modal.Content>
         </Modal>
       
    )
}