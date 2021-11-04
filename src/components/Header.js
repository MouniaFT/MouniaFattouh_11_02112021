import { Component } from 'react'
import logo from '../images/logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_link active">Accueil</li>
            <li className="nav_link">A Propos</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
