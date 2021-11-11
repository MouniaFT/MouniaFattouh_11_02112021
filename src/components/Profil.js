import { Component } from 'react'

class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { host } = this.props
    return (
      <div className="profil">
        <p className="profil_name">{host.name}</p>
        <div className="profil_img">
          <img src={host.picture} alt="profil" />
        </div>
      </div>
    )
  }
}

export default Profil
