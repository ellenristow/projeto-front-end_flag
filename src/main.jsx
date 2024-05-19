import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/Context.jsx';
import { ThemeProvider } from './hooks/context/ThemeContext.jsx';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<PostProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PostProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
