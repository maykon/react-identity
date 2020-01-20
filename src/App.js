import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import { Routes } from './routes/routes';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter children={Routes} basename={'/'} />
		</AuthProvider>
	);
}

export default App;
