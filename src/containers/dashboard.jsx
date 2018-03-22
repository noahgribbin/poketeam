import React from 'react'
import { getPokemonRequest, getLocationRequest } from '../actions/pokemonActions'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(locationUrl){
    console.log('in handle location', locationUrl);
    this.props.getLocationRequest(locationUrl)
  }

  render(){
    return(
      <div>
        <p>Welcome to poketeam</p>
        <button onClick={this.props.getPokemonRequest}>Random Pokemon</button>
        { this.props.pokemon ?
          <div>
            <p>{this.props.pokemon.name}</p>
            <img src={this.props.pokemon.sprites.front_default}></img>
            <p>aaa{this.props.pokemon.location_area_encounters}</p>
            <button onClick={this.handleLocation(this.props.pokemon.location_area_encounters)}>Location</button>
            {this.props.location ?
              <p>{this.props.location}</p>
            : undefined}
          </div>

          : undefined}
        <div></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.pokemon,
  location: state.pokemonReducer.location
})

const mapDispatchToProps = dispatch => ({
  getPokemonRequest: () => dispatch(getPokemonRequest()),
  getLocationRequest: () => dispatch(getLocationRequest)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
