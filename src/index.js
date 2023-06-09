import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/router';
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import './theme/styles.css';
import Background from './components/background';
import {MousePositionProvider} from './contexts/mousePositionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MousePositionProvider>
        <Background />
        <Router />
      </MousePositionProvider>
    </ChakraProvider>
  </React.StrictMode>
);
