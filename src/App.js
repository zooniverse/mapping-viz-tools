import React from 'react';
import { Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import history from './history'
import theme from 'theme'
import Home from './screens/Home'

function App() {
  return (
    <Router history={history}>
        <main>
          <Grommet full theme={theme}>
            <Route exact path="/" component={Home} />
          </Grommet>
        </main>
    </Router>
  );
}

export default App;
