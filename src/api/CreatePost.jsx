import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import PostForm from '../components/pages/PostForm';

import axios from 'axios';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    const { dispatch } = usePosts();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/posts/`, { title, body });

            const data = response.data;
            console.log(data);

            dispatch({ type: 'ADD_POST', payload: data });

            alert('novo post criado');
            navigate('/');

        } catch (error) {
            console.error('erro ao criar o post:', error);
        }
    };

    return (
        <>
            <PostForm action='create' title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
        </>
    );
};

export default CreatePost;
