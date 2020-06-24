import React from 'react';
import { Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet'
import styled from 'styled-components'
import history from './history'
import theme from './theme'
import Home from './screens/Home'
import './App.css';

const StyledGrommet = styled(Grommet)`
  height: 100%
`

function App() {
  return (
    <Router history={history}>
        <main>
          <StyledGrommet theme={theme}>
            <Route exact path="/" component={Home} />
          </StyledGrommet>
        </main>
    </Router>
  );
}

export default App;
