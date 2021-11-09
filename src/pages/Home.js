import { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Apartment from '../components/Apartment'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data } = this.props

    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Banner />
            <ul className="apartment_list">
              {data?.map((apartment) => (
                <Link
                  key={apartment.id}
                  to={`/ApartmentPage/${apartment.id}`}
                  className="apartment"
                >
                  <Apartment
                    key={apartment.id}
                    title={apartment.title}
                    cover={apartment.cover}
                  />
                </Link>
              ))}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
