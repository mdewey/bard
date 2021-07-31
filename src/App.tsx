import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import reducerFunction from './reducer'
import { AppContextInterface, AppState, MusicContext } from './context/useMusicContext';
import Home from './pages/Home';
import { Layout } from './containers/Layout';


function App() {
  const [state, dispatch] = useReducer(reducerFunction, {} as AppState)

  const ctxt = { state, dispatch } as AppContextInterface

  return (
    <MusicContext.Provider value={ctxt}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    </MusicContext.Provider>
  )
}

export default App;
