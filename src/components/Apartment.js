import { Component } from 'react'

class Apartment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { title } = this.props
    return (
      <li className="apartment">
        <h3 className="apartment_title">{title}</h3>
      </li>
    )
  }
}

export default Apartment
