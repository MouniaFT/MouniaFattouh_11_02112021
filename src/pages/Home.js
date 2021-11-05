import { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Apartment from '../components/Apartment'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/MouniaFT/MouniaFattouh_11_02112021/main/public/json/data.json'
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Banner />
            <ul className="apartment_list">
              {data?.map((apartment) => (
                <Apartment key={apartment.id} title={apartment.title} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
