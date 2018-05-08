import React, { Component } from 'react'
import { Row, Column, Foundation } from 'react-foundation'
import $ from 'jquery'
import axios from 'axios'
import quotes from '../data/quotes'
import apiKey from '../hush.js'
axios.defaults.headers['content-type'] = 'application/json'
axios.defaults.headers['secret-key'] = apiKey
axios.defaults.headers.private = true

let links = [
  { name: 'Pegasus: Mobile Ether Alerts [MERN]', url: 'https://nc-pegasus.herokuapp.com/about' },
  { name: 'XZZZ Link Obfuscator [SERN]', url: 'https://xzzz.herokuapp.com/' },
  { name: 'Fieldmoji [Node Twitter Bot]', url: 'https://www.twitter.com/fieldmoji' },
  { name: 'Dev-Dash Chrome Extension [React]', url: 'https://ncal.github.io/Dev-Dash/' },
  { name: 'GDAX-Express [MERN]', url: 'https://github.com/NCal/gdax-express' },
  { name: 'Tarot Web App [React / Router]', url: 'https://ncal.github.io/Tarot/' },
  { name: 'Flickr Search [React / Redux]', url: 'https://ncal.github.io/React-Flickr-Search/' },
  { name: 'Oblique Strategies [React]', url: 'https://ncal.github.io/Oblique_Strategies/' },
  { name: 'Mandala Animation [CSS]', url: 'https://ncal.github.io/Mandala/' },
  { name: 'Eveningss.com [React]', url: 'http://www.eveningss.com/' }
]

class App extends Component {
  render () {
    return (
      <div className="container">
        <Bio />
        <Links />
        <Contact />
        <Footer />
        <Banner/>
      </div>
    )
  }
}

class Banner extends Component {
  constructor (props) {
    super()

    this.state = {
      bannerText: 'Everyone carries a piece of the puzzle. Nobody comes into your life by mere coincidence. Trust your instincts. Do the unexpected. Find the others.'
    }
  }

  componentDidMount () {
    this.animateTicker()
    this.getQuotes()
  }

  getQuotes () {
    axios.get('//api.jsonbin.io/b/5ac8d353214f9a2b84c6cd49')
      .then(function (response) {
        // console.log(response.data)
      })
      .catch(function (error) {
        // // console.log(error)
      })
    // self.postQuote()
    let self = this
    let quoteLength = quotes.quotes.length
    // console.log(quotes.quotes.length)
    let rand = Math.floor(Math.random() * quoteLength)
    let randomQuote = quotes.quotes[rand]
    // console.log('rand', randomQuote)
    randomQuote !== undefined ? self.setState({bannerText: randomQuote.quote}) : console.log('undefined')
  }

  // postQuote () {
  //   // console.log('post quote')
  //   let quote = { quote: 'Welcome to the jungle', author: 'GnR' }

  //   axios.post('https://api.jsonbin.io/b/', {
  //     data: JSON.stringify(quote)
  //   })
  //     .then(function (res) {
  //       // console.log(res)
  //     })
  //     .catch(function (err) {
  //       // console.log(err)
  //     })
  // }

  animateTicker () {
    let self = this
    // console.log('animate ticker')
    $('.ticker').animate({top: '-1500px'}, 20000, () => {
      $('.ticker').animate({ top: '0' }, 20000, () => {
        self.animateTicker()
      })
    })
  }

  render () {
    return (
      <div className="banner">
        <div className="ticker">
          {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText}  {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText} {this.state.bannerText}        </div>
      </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <p>NATHAN BROADDUS</p>
      </div>
    )
  }
}

class Bio extends Component {
  render () {
    return (
      <Column className="bio component" large={2} medium={4} small={8}>
        <div>
          <h1>BIO</h1>
          <p>
            I am a Front-End Developer with deep roots in design, currently
            residing in Brooklyn, NY. I am always working to improve my skills,
            and I enjoy making functional and elegant projects.
          </p>
        </div>
      </Column>
    )
  }
}

class Links extends Component {
  render () {
    return (
      <div className="nav component">
        <Column large={12} medium={12} small={12}>
          <h1>RECENT PROJECTS</h1>
          {links.map(function (thang, i) {
            return (
              <a key={i} className="links" href={thang.url}>
                <h5>{thang.name}</h5>
              </a>
            )
          })}
        </Column>
      </div>
    )
  }
}

class Contact extends Component {
  render () {
    return (
      <div className="contact component">
        <Column large={3} medium={4} small={12}>
          <h1>CONTACT</h1>
          <h5>NathanBroaddus@gmail.com</h5>
          <a className="links" href="Https://www.Github.com/ncal">
            <h5>Github.com/ncal</h5>
          </a>
          <a className="links" href="app/assets/NB_WebDevRes2018.pdf">
            <h5>Resume</h5>
          </a>
        </Column>
      </div>
    )
  }
}

export default App
