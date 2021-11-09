import { Component } from 'react'

class Apartment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { title, cover } = this.props
    return (
      <li>
        <div className="apartment_img">
          <img src={cover} alt={title} />
        </div>
        <h3 className="apartment_title">{title}</h3>
      </li>
    )
  }
}

export default Apartment
