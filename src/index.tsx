import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Home'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
