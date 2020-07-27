import React from 'react';
import { Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import history from './history'
import theme from 'theme'
import Home from './screens/Home'
import MapPage from './screens/MapPage'

function App() {
  return (
    <Router history={history}>
        <main>
          <Grommet full theme={theme}>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={MapPage} />
          </Grommet>
        </main>
    </Router>
  );
}

export default App;
