import { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

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
          </div>
        </main>
      </div>
    )
  }
}

export default Home
