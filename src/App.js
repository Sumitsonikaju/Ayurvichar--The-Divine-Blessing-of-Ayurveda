// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HerbPage from './pages/HerbPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/herbs/:id" component={HerbPage} />
      </Switch>
    </Router>
  );
};

export default App;
