import React, { Component } from 'react'

import Footer from './Footer'
import Home from './Home'
import NewAdvert from './NewAdvert'
import Categories from './Categories'

import base from './base'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
    base.bindToState('categories', {
      context: this,
      state: 'categories'
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categories={this.state.categories} />} />
          <Route path='/new-advert' exact render={() => <NewAdvert categories={this.state.categories} />} />
          <Route path='/categories' render={() => <Categories categories={this.state.categories} />} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
