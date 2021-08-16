import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ChannelProvider } from './state/ChannelProvider';



render(

  <ChannelProvider>
    <App />
  </ChannelProvider>,
  document.getElementById('root')
);
