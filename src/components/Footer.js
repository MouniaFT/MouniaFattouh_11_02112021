import { Component } from 'react'
import logo from '../images/logoWhite.svg'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer
