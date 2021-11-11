import { Component } from 'react'
import logo from '../images/logoWhite.svg'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer
