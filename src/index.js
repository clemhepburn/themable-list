import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ChannelProvider } from './state/ChannelProvider';
import { ThemeProvider } from './state/useTheme';



render(
  <ThemeProvider>
    <ChannelProvider>
      <App />
    </ChannelProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
