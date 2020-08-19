import React, { Component } from 'react'; //import React Component
import _ from 'lodash';

import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props)

    let pets = this.props.pets.map((pet) => {
      pet.adopted = false;
      return pet;
    })

    this.state = {
      pets : pets
    }
  }

  adopt = (name) => {
    let pets = this.state.pets
    let pet = _.find(this.state.pets, {name : name})
    pet.adopted = !pet.adopted
    this.setState({pets : pets})
  }
  
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <h1>Adopt a Pet</h1>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={Object.keys(_.groupBy(this.state.pets, (pet) => pet.breed))}/>
              <AboutNav />
            </div>

            <div id="petList" className="col-9">
              <PetList pets={this.state.pets} adoptCallback={this.adopt}/>
            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    )
  }
}

class BreedNav extends Component {
  render() {
    let pets = this.props.breeds.map((breed) => {
    return (<li key={breed}><a href="">{breed}</a></li>)
    })
    return (
        <nav id="breedLinks">
          <h2>Pick a Breed</h2>
          <ul className="list-unstyled">
            {pets}
          </ul>            
        </nav>
    )
  }
}

class PetCard extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.adoptCallback}>
        <img className="card-img-top" src={this.props.pet.img} alt={this.props.pet.name} />
        <div className="card-body">
          <h3 className="card-title">{this.props.pet.name}{this.props.pet.adopted?" (Adopted)":""}</h3>
          <p className="card-text">{this.props.pet.sex + " " + this.props.pet.breed}</p>
        </div>
      </div>
    )
  }
}

class PetList extends Component {
  render() {
    let petList = this.props.pets.map((pet) => {
      return <PetCard pet={pet} adoptCallback={() => {this.props.adoptCallback(pet.name)}}/>
    })

    return (
      <div id="petList" className="col-9">
        <h2>Dogs for Adoption</h2>
        <div class="card-deck">
          {petList}
        </div>
      </div>
    )
  }
}

export default App;
