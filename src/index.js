import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/router';
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import Background from './components/background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Background />
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);
