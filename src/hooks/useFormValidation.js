import { useState } from 'react'
import { telefoneMask } from '../utils/masks'
import { validatePhone, validateName, validateEmail } from '../validations/contato'

const ValidationTypes = (validateType, value) => {
    switch (validateType) {
        case 'phone':
            return validatePhone(value)
        case 'name': 
            return validateName(value)
        case 'email':
            return validateEmail(value)
        default:
            return ''
    }
}

const MasksTypes = (maskType, value) => {
    switch (maskType) {
        case 'phone':
            return telefoneMask(value)
        default:
            return ''
    }
}

export const useFormValidation = (mask = false) => {
    const [field, setField] = useState('')
    const [errors, setErrors] = useState(false)

    function handleFieldChange (event) {

        if (!event) {
            handleClearField()
            return
        }

        let value = event.target.value
        if (mask) {
            setField(handleWithMask(event.currentTarget.name, value))
        }
        else {
            setField(value)
        }
        handleErrors(event.currentTarget.name, value)
    }

    function handleErrors(name, value) {
        let errors = ValidationTypes(name, value)
        setErrors(errors)
    }

    function handleWithMask(name, value) {
        let valueMasked = MasksTypes(name, value)
        return valueMasked
    }

    function handleClearField() {
        setField('')
        setErrors(false)
    }

    return [field, handleFieldChange, errors]
}