import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from 'styled-components'
import media from './components/utils/media'
import GlobalStyle from './components/config/global'
import Head from './head'
import Images from './components/includes/images'
import Header from './components/includes/header'
import Footer from './components/includes/footer'
import Contribute from './components/pages/Contribute'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import posterList from './components/data/posterlist'

const Main = styled.main`
  display: flex;
  flex-direction: column;

  & p + p, & section + section {
    margin-top: 1em;
  }

  ${media.m`
    flex-direction: row;
  `}
`

const Half = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  padding: 0.5em;

  & img {
    width: 100%;
  }

  ${media.m`
    max-height: 100vh;
    padding: 0.75em;
    overflow: scroll;
  `}
`

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
        <Main>
          <Images
            count={this.state.count}
            prev={this.prev}
            next={this.next}
            totalCount={totalCount}
          />
          <Half>
            <Header/>
            <Switch>
              <Route exact path="/" component={Contribute} />}
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Footer/>
          </Half>
        </Main>
      </Router>
    )
  }
}

export default App
