import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Routes />
    </div>
  );
}

function Routes() {
  function HomePage() {
    return <div>Home Page</div>
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
