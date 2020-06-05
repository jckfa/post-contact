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
import NotFound from './components/pages/NotFound'
import posterList from './components/data/posterlist'

const Main = styled.main`
  display: flex;
  flex-direction: column;

  ${media.m`
    flex-direction: row;
  `}
`

const Notice = styled.a`
  color: black;
  text-align: center;
  text-decoration: none;
  display: block;
  ${'' /* text-transform: uppercase; */}
  line-height: 1;
  width: 100%;
  background-color: #fc0;
  padding: 0.4em 0.25em 0.25em;
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
    }
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
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

  render() {
    return (
      <Router>
        <GlobalStyle/>
        <Head/>
        {/* <Notice href='https://blacklivesmatters.carrd.co/' target='_blank' rel='noopener noreferrer'>
          Support Black Lives Matter
        </Notice> */}
        <Main>
          <Images
            prev={this.prev}
            next={this.next}
            count={this.state.count}
            allPosterImages={allPosterImages}
            totalCount={totalCount}
            PosterInfoIndexes={PosterInfoIndexes}
          />
          <Half>
            <Header/>
            <Switch>
              <Route exact path="/" component={Submit} />}
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
