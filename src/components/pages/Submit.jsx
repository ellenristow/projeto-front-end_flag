const Submit = ({ values }) => {
	return (
		<div className='contato__submit'>
			<p>Nome: {values.name} </p>
			<p>Email: {values.email} </p>
			<p>Mensagem: {values.message}</p>
		</div>
	);
};

export default Submit;
