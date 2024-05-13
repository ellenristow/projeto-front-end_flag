import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import axios from 'axios';

const DeletePost = () => {
	
    const { id: postId } = useParams();
    const id = Number(postId);
    const navigate = useNavigate();
    const { dispatch } = usePosts();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do post:', error);
            }
        };

        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/posts/${id}`);

            dispatch({ type: 'DELETE_POST', payload: id })
            
            alert('post apagado');
            navigate('/');
        } catch (error) {
            console.error('Erro ao deletar o post:', error);
        }
    };

    if (!post) return <div>Loading...</div>;

    return <PostForm action='delete' title={post.title} body={post.body} onTitleChange={() => { }} onBodyChange={() => { }} onSubmit={handleDelete} />;

};

export default DeletePost;
