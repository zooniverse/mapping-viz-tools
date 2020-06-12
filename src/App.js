import React from 'react';
import { Router, Route } from 'react-router-dom'
import history from './history'
import Home from './screens/Home'
import './App.css';

function App() {
  return (
    <Router history={history}>
      <>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </>
    </Router>
  );
}

export default App;
