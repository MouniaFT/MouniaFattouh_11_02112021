import { Component } from 'react'
import logo from '../images/logo.svg'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
      </div>
    )
  }
}

export default Home
