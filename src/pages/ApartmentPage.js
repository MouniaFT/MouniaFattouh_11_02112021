import { Component } from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'

class ApartmentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <Header />
        <main className="apartmentPage">
          <div className="container">
            {data
              ?.filter(
                (apartment) => apartment.id === this.props.match.params.id
              )
              .map((apartment) => (
                <>
                  <Gallery
                    key={apartment.id}
                    pictures={apartment.pictures}
                    title={apartment.title}
                  />

                  <h2>{apartment.title}</h2>
                </>
              ))}
          </div>
        </main>
      </div>
    )
  }
}

export default ApartmentPage
