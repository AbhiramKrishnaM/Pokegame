import React, { Component } from 'react';
import './Pokecard.css'
var url = 
"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class Pokecard extends Component {

    
    render(){
       
        let len = (number) => (number <= 999 ? `00${number}`.slice(-3) : number) 

        let imgSource = `${url}${len(this.props.id)}.png`;
        return(
            <div className="Pokecard">
               <h1>{this.props.name}</h1> 
                <img src={imgSource} alt={this.props.name} className="image"/>
                <div><h3>Type : {this.props.type}</h3></div>
                <div><h3>EXP : {this.props.exp}</h3></div>
            </div>
        )
    }
}

export default Pokecard;