import React, { Component } from 'react';

import Pokecard from './pokecard';
import './Pokedex.css'


class Pokedex extends Component {

   

    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className="Winner">Winner</h1>;
        }else{
            title = <h1 className="Loser">Loser</h1>;
        }
        return(

            
            <div className="Pokedex">

            <h1>{this.props.hand}</h1>
            <p>Total Experience {this.props.exp}</p>
            {title};
            <div className="Pokedex-cards">
            {this.props.pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            ))}

            </div>

            </div>
        )
    }


}

export default Pokedex;