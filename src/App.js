import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import PrivateRoute from './components/PrivateRoute';
import PokemonPage from './pages/PokemonPage';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => <h2> 404 not found</h2>;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <PrivateRoute
              isLogin={loggedIn}
              path="/pokemons"
              component={PokemonPage}
              exact
            />

            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
