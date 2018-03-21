import React from 'react'
import { getPokemonRequest } from '../actions/pokemonActions'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
  render(){
    return(
      <div>
        <p>Welcome to poketeam</p>
        <div onClick={this.props.getPokemonRequest}>Click me to load bulbasaur data</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = dispatch => ({
  getPokemonRequest: () => dispatch(getPokemonRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
