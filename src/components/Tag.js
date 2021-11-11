import { Component } from 'react'

class Tag extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { tag } = this.props
    return <li className="tag">{tag}</li>
  }
}

export default Tag
