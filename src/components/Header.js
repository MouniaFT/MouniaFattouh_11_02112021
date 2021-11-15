import { Component } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul className="nav_list">
              <Link to="/" className="nav_link ">
                Accueil
              </Link>
              <Link to="/apropos" className="nav_link">
                A Propos
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
