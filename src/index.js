import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Root = () => (
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
