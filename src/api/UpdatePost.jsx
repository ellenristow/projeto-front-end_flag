import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import axios from 'axios';

const UpdatePost = () => {
	const { id: postId } = useParams();
	const id = Number(postId);
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(`http://localhost:8000/posts/${id}`);
				const post = response.data;

				setTitle(post.title);
				setBody(post.body);
			} catch (error) {
				console.error('Erro ao buscar post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleSumbit = async event => {
		event.preventDefault();

		try {
			const response = await axios.put(`http://localhost:8000/posts/${id}`, {
				title,
				body,
			});

			const updatePost = response.data;

			dispatch({ type: 'UPDATE_POST', payload: updatePost });

			alert('post atualizado');
			navigate('/');
		} catch (error) {
			console.error('Erro ao atualizar o post:', error);
		}
	};

	return <PostForm action='update' title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSumbit} />;
};

export default UpdatePost;
