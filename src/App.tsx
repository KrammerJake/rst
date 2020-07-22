import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Provider theme={defaultTheme}>
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </Provider>
    </div>
  );
};

export default App;
