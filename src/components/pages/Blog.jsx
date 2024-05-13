import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from '../pages/Pagination';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:8000/posts/');

				if (!response.ok) {
					throw new Error('Não está respondendo');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
		<section className='blog'>
			<div className='container'>
				<div className='blog__wrapper'>
					<div className='blog__title'>
						<h2>blog</h2>
					</div>
					<div className='blog__create'>
						<p>
							<Link to={`/create`}>post</Link>
						</p>
					</div>
					<div className='blog__posts'>
						{error && <h4>{error.message}</h4>}

						{currentPosts.map(post => (
							<article className='blog__post' key={post.id}>
								<h3>
									{post.id} - {post.title}
								</h3>
								<p>{post.body}</p>
								<Link to={`/update/${post.id}`} className='blog__btn update'>
									atualizar
								</Link>
								<Link to={`/delete/${post.id}`} className='blog__btn delete'>
									deletar
								</Link>
							</article>
						))}
					</div>
					<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
				</div>
			</div>
		</section>
	);
};

export default Blog;
