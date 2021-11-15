import { Component } from 'react'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartmentIndex: 0,
    }
  }

  prevArrow = () => {
    this.state.apartmentIndex === 0
      ? this.setState({ apartmentIndex: this.props.pictures.length - 1 })
      : this.setState({ apartmentIndex: this.state.apartmentIndex - 1 })
  }

  nextArrow = () => {
    this.state.apartmentIndex === this.props.pictures.length - 1
      ? this.setState({ apartmentIndex: 0 })
      : this.setState({ apartmentIndex: this.state.apartmentIndex + 1 })
  }
  render() {
    const { pictures, title } = this.props

    return (
      <div className="gallery">
        <div className="gallery_img">
          <img src={pictures?.[this.state.apartmentIndex]} alt={title} />
        </div>
        {pictures?.length > 1 && (
          <>
            <button
              className="gallery_arrow gallery_arrow--left"
              onClick={this.prevArrow}
            >
              <img src={leftArrow} alt="leftArrow" />
            </button>
            <button
              className="gallery_arrow gallery_arrow--right"
              onClick={this.nextArrow}
            >
              <img src={rightArrow} alt="rightArrow" />
            </button>
            <span className="gallery_counter">
              {this.state.apartmentIndex + 1}/{pictures?.length}
            </span>
          </>
        )}
      </div>
    )
  }
}

export default Gallery
