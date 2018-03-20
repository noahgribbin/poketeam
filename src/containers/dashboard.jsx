import React from 'react'
import getPokemonRequest from '../actions/pokemonActions'
import connect from 'react-redux'

class Dashboard extends React.Component {
  componentWillMount(){
    console.log('mounting');
    console.log(this.props);
  }
  render(){
    return(
      <div>
        <p>Welcome to poketeam</p>
        <div onClick={this.props.getPokemonRequest}>Click me to load bulbasaur data</div>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  pokemon: state.pokemon
})

let mapDispatchToProps = dispatch => ({
  getPokemonRequest: () => dispatch(getPokemonRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
