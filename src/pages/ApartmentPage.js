import { Component } from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Tag from '../components/Tag'
import Profil from '../components/Profil'
import Collapse from '../components/Collapse'

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
                  <h2 className="apartmentPage_title">{apartment.title}</h2>
                  <p className="apartmentPage_location">{apartment.location}</p>
                  <ul className="apartmentPage_tags">
                    {apartment.tags.map((tag, index) => (
                      <Tag key={index} tag={tag} />
                    ))}
                  </ul>
                  <Profil host={apartment.host} />
                  <div className="apartmentPage_collapse">
                    <Collapse
                      title="Description"
                      content={apartment.description}
                    />
                    <Collapse
                      title="Équipement"
                      content={apartment.equipments}
                      list={true}
                    />
                  </div>
                </>
              ))}
          </div>
        </main>
      </div>
    )
  }
}

export default ApartmentPage
