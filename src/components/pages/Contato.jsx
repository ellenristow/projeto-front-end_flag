import { useFormik } from 'formik';
import { schema } from './Schemas';
import Submit from './Submit';

const onSubmit = async (values, actions) => {
	await new Promise(resolve => setTimeout(resolve, 1000));
	actions.resetForm();
};

const Contato = () => {

	const { values, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: schema,
		onSubmit,
	});

	return (
		<section className='contato'>
			<div className='container'>
				<div className='contato__wrapper'>
					<div className='contato__imagem'>
						<img className='img-grid' src='/contato-foto.jpeg' alt='folhagem' />
					</div>
					{
						<div className='contato__titulo'>
							<h2>Contato</h2>
						</div>
					}
					<div className='contato__form'>
						<form onSubmit={handleSubmit}>
							{errors.name && <p className='error'>{errors.name}</p>}
							<input value={values.name} onChange={handleChange} onBlur={handleBlur} type='text' placeholder='Nome' name='name' />
							{errors.email && <p className='error'>{errors.email}</p>}
							<input value={values.email} onChange={handleChange} onBlur={handleBlur} type='email' placeholder='E-mail' name='email' />
							{errors.message && <p className='error'>{errors.message}</p>}
							<textarea value={values.message} onChange={handleChange} onBlur={handleBlur} name='message' placeholder='Mensagem'></textarea>
							<button disabled={isSubmitting} onClick={onSubmit} type='submit' className='button'>
								Enviar
							</button>
						</form>
					</div>
					<Submit className='contato__submit' values={values} />
				</div>
			</div>
		</section>
	);
};

export default Contato;
