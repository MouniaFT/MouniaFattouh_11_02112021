import { Component } from 'react'
import starRed from '../images/starRed.svg'
import starGrey from '../images/starGrey.svg'

class StarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { rating } = this.props
    const itemsRed = []
    const itemsGrey = []

    for (let i = 0; i < rating; i++) {
      itemsRed.push(<img src={starRed} key={i} alt="" />)
    }

    for (let i = 0; i < 5 - rating; i++) {
      itemsGrey.push(<img src={starGrey} key={i} alt="" />)
    }
    return (
      <div className="starRating">
        <span className="starRating--red">{itemsRed}</span>
        {rating < 5 && <span className="starRating--grey">{itemsGrey}</span>}
      </div>
    )
  }
}

export default StarRating
