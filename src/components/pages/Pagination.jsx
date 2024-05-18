const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = [];

	const totalPages = Math.ceil(totalPosts / postsPerPage);
	console.log(totalPages);
	console.log(pageNumbers);

	if (currentPage === 1) {
		pageNumbers.push(currentPage, currentPage + 1, currentPage + 2);
		if (currentPage + 3 <= totalPages) {
			pageNumbers.push('...');
		}
	} else if (currentPage === totalPages) {
		pageNumbers.push(currentPage - 2, currentPage - 1, currentPage);
		if (currentPage - 3 >= 1) {
			pageNumbers.unshift('...');
		}
	} else {
		pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
		if (currentPage + 2 <= totalPages) {
			pageNumbers.push('...');
		}
		if (currentPage - 2 >= 1) {
			pageNumbers.unshift('...');
		}
	}

	if (!pageNumbers.includes(1)) {
		pageNumbers.unshift(1);
	}
	if (!pageNumbers.includes(totalPages)) {
		pageNumbers.unshift(totalPages);
	}

	return (
		<div className='pagination'>
			<button className='pagination__button' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
				Anterior
			</button>

			{pageNumbers.map((number, idx) =>
				number === '...' ? (
					<span key={`ellipsis-${idx}`}>...</span>
				) : (
					<button key={`page-${number}`} onClick={() => paginate(number)} className={`pagination__page-button ${currentPage === number ? 'active' : ''}`}>
						{number}
					</button>
				),
			)}
			<button className='pagination__button' onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
				Próximo
			</button>
		</div>
	);
};

export default Pagination;
