import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './ui/pages'
import { MainLayout } from './ui/layouts'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <MainLayout component={Home}/>}/>
        </div>
      </Router>
    )
  }
}

export default Routes
