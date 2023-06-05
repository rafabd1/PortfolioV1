import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/router';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
);
