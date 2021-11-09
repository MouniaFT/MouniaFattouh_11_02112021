import { Component } from 'react'
import Header from '../components/Header'

class ApartmentPage extends Component {
  render() {
    const { id } = this.props.match.params.id
    return (
      <div>
        <Header />
        <main>
          <div></div>
        </main>
      </div>
    )
  }
}

export default ApartmentPage
