import React from 'react'
import { getPokemonRequest } from '../actions/pokemonActions'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <p>Welcome to poketeam</p>
        <div onClick={this.props.getPokemonRequest}>Click me to load a random pokemon</div>
        { this.props.pokemon ?
          <div>
            <p>{this.props.pokemon.name}</p>
            <img src={this.props.pokemon.sprites.front_default}></img>
          </div>

          : undefined}
        <div></div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  // console.log(state);
  {
  pokemon: state.pokemonReducer.pokemon
})

const mapDispatchToProps = dispatch => ({
  getPokemonRequest: () => dispatch(getPokemonRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
