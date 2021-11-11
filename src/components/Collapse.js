import { Component } from 'react'
import topArrow from '../images/topArrow.svg'
import bottomArrow from '../images/bottomArrow.svg'

class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleCollapse = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({ isOpen: true })
    }
  }

  render() {
    const { title, content } = this.props
    return (
      <div className="collapse">
        <div className="collapse_header">
          <h3 className="collapse_title">{title}</h3>
          <button className="collapse_arrow" onClick={this.toggleCollapse}>
            {this.state.isOpen === true ? (
              <img src={topArrow} alt="chevron-top" />
            ) : (
              <img src={bottomArrow} alt="chevron-bottom" />
            )}
          </button>
        </div>
        {this.state.isOpen === true ? (
          <p className="collapse_text">{content}</p>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Collapse
