import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	return (
		<section className='post-form'>
			<div className='container'>
				<div className='post-form__wrapper'>
					<h3>{action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : action === 'Create Post'}</h3>
					<div className='post-form__input'>
						<label>Title</label>
						<input type='text' value={title} onChange={event => onTitleChange(event.target.value)} required />
					</div>
					<div className='post-form__input'>
						<label>Body</label>
						<textarea type='text' value={body} onChange={event => onBodyChange(event.target.value)} required />
					</div>
					<div className='post-form__btns'>
						{action === 'delete' ? (
							<>
								<button className='button' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='button' type='button' onClick={() => navigate('/blog')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className='form__btns' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/blog')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PostForm;
