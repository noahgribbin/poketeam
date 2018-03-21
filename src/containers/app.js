import React from 'react';
import Dashboard from './dashboard.jsx'
import {Provider} from 'react-redux'
import store from '../lib/store'
import {Router, Route, BrowserRouter} from 'react-router';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
        <Provider store={store}>
            <Dashboard />

        </Provider>
      )
  }
}

export default App
