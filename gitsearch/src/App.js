import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import GlobalStyle from './styles/globalStyles';

export default function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
}
