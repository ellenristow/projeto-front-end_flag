import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/Context.jsx';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PostProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PostProvider>
	</React.StrictMode>,
);
