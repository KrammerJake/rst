import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';
import React from 'react';
import './App.css';

const App = () => {
  console.log('App!');
  return (
    <div className='App'>
      <Provider theme={defaultTheme}>
        <Button variant='negative'>
          Hello React Spectrum!
        </Button>
      </Provider>
    </div>
  );
};

export default App;
