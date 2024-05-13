import * as yup from 'yup';

export const schema = yup.object().shape({
	name: yup.string().required('Campo obrigatório'),
	email: yup.string().email('Escreva um email válido').required('Campo obrigatório'),
	message: yup.string().max(30).required('Campo obrigatório'),
});
