export const validateEmail = value => {

    let errors = ""

    if (!value) {
        errors = "Digite o seu email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors = 'Email fornecido é inválido'
    }

    return errors
}

export const validateName = value => {
    let errors = ""

    if (!value) {
        errors = "Digite o seu nome"
    } else if (value.length <= 2) {
        errors = 'O nome fornecido é inválido'
    }

    return errors
}

export const validatePhone = value => {
    let errors = ""

    if (!value) {
        errors = "Digite o seu telefone"
    } else if (value.length < 15) {
        errors = 'O telefone fornecido é inválido'
    }

    return errors
}