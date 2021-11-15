import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Component } from 'react'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import ApartmentPage from './pages/ApartmentPage'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
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
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route exact path="/apropos">
            <Apropos />
          </Route>
          <Route
            exact
            path="/apartmentpage/:id"
            render={(props) => <ApartmentPage {...props} data={data} />}
          />
          <Route exact path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
