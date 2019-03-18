import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Provider } from 'reakit'
import defaultTheme from 'reakit-theme-default'

const App = () => {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
