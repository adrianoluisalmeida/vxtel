import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <Dashboard />
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
