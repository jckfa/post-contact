import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStyle from './components/config/global'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import posterList from './components/data/posterlist'
import Head from './head'

const totalCount = posterList.length - 1

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  prev() {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 1 : totalCount
    }))
  }

  next() {
    this.setState(prevState => ({
      count: prevState.count < totalCount ? prevState.count + 1 : 0
    }))
  }

  render() {
    return (
      <Router>
        <GlobalStyle/>
        <Head/>
        <Switch>
          <Route exact path="/" render={(props) =>
            <Home {...props}
              count={this.state.count}
              prev={this.prev}
              next={this.next}
              totalCount={totalCount}
            />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
