import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from 'styled-components'
import media from './components/utils/media'
import GlobalStyle from './components/config/global'
import Head from './head'
import Images from './components/includes/images'
import Header from './components/includes/Header'
import Footer from './components/includes/Footer'
import Submit from './components/pages/Submit'
import About from './components/pages/About'
// import Download from './components/pages/Download'
import NotFound from './components/pages/NotFound'
import posterList from './components/data/posterlist'
// import Notice from './components/utils/Notice'

const Main = styled.main`
  display: flex;
  flex-direction: column;

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

function getAllPosterImages() {
  const images = []

  for (var i = 0; i < posterList.length; i++) {
    images.push(posterList[i].images);
  }

  var merged = [].concat.apply([], images)

  return merged
}

function getPosterInfoIndexes() {
  var Indexes = []

  for (var i = 0; i < posterList.length; i++) {
    for (var j = 0; j < posterList[i].images.length; j++) {
      Indexes.push(i)
    }
  }

  return Indexes
}

const allPosterImages = getAllPosterImages(),
      totalCount = getAllPosterImages().length - 1,
      PosterInfoIndexes = getPosterInfoIndexes()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      grid_view: false
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  prev() {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 1 : totalCount,
    }))
  }

  next() {
    this.setState(prevState => ({
      count: prevState.count < totalCount ? prevState.count + 1 : 0,
    }))
  }

  toggle() {
    this.setState(prevState => ({
      grid_view: !prevState.grid_view
    }))
  }

  render() {
    return (
      <Router>
        <GlobalStyle/>
        <Head/>
        {/* <Notice
          text={'Open Call for Submissions'}
          repeat={12}
        /> */}
        <Main>
          <Images
            prev={this.prev}
            next={this.next}
            toggle={this.toggle}
            grid_view={this.state.grid_view}
            count={this.state.count}
            allPosterImages={allPosterImages}
            totalCount={totalCount}
            PosterInfoIndexes={PosterInfoIndexes}
          />
          <Half>
            <Header/>
            <Switch>
              <Route exact path="/">
                <Submit/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              {/* <Route path="/download">
                <Download/>
              </Route> */}
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
            <Footer/>
          </Half>
        </Main>
      </Router>
    )
  }
}

export default App
