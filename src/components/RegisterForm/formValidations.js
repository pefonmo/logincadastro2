import * as yup from 'yup';

export const FormValidations = yup.object().shape({
    cpf: yup
        .string()
        .required('*CPF obrigatório'),
    password: yup
        .string()
        .min(8, 'Minimo 8 caracteres')
        .max(14, 'Máximo 14 caracteres')
        .required('*Senha obrigatório'),
    confirmPassword: yup
        .string()
        .min(8, 'Minimo 8 caracteres')
        .max(14, 'Máximo 14 caracteres')
        .required('*Confirmação de senha obrigatório'),
})

export default FormValidations;
