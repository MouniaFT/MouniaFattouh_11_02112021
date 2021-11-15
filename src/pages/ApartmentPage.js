import { Component } from 'react'
import Gallery from '../components/Gallery'
import Tag from '../components/Tag'
import Profil from '../components/Profil'
import StarRating from '../components/StarRating'
import Collapse from '../components/Collapse'
import { Redirect } from 'react-router-dom'

class ApartmentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // Open <Link> at top of page
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { data } = this.props
    const apartment = data?.find(
      (apartment) => apartment.id === this.props.match.params.id
    )

    if (data.length === 0) {
      return 'loading'
    }
    if (data.length > 0 && !apartment) {
      return <Redirect to="/404" />
    }
    return (
      <main className="apartmentPage">
        <div className="container">
          <>
            <Gallery
              key={apartment.id}
              pictures={apartment.pictures}
              title={apartment.title}
            />
            <div className="apartmentPage_info">
              <div>
                <h2 className="apartmentPage_title">{apartment.title}</h2>
                <p className="apartmentPage_location">{apartment.location}</p>
                <ul className="apartmentPage_tags">
                  {apartment.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </ul>
              </div>
              <div className="apartmentPage_profil">
                <StarRating rating={apartment.rating} />
                <Profil host={apartment.host} />
              </div>
            </div>
            <div className="apartmentPage_collapse">
              <Collapse title="Description" content={[apartment.description]} />
              <Collapse title="Équipement" content={apartment.equipments} />
            </div>
          </>
        </div>
      </main>
    )
  }
}

export default ApartmentPage
