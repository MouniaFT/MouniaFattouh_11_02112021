import { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
  render() {
    return (
      <main className="errorPage">
        <div className="container">
          <span className="errorPage_404">404</span>
          <p className="errorPage_text">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="errorPage_link">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </main>
    )
  }
}

export default Error404
