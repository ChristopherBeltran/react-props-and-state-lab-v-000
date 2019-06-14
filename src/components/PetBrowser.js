import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  generatePetCards = () => {
    return(
    this.props.pets.map((pet, index) =>
    <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    )
    )
  }
  
  
  render() {
    return <div className="ui cards">
    {this.generatePetCards()}
    </div>
  }
}

export default PetBrowser
