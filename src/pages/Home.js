import { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Banner />
          </div>
        </main>
      </div>
    )
  }
}

export default Home
