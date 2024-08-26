import React, { FC } from 'react';
import { IPokemonInfo } from '../../models/IPokemonInfo';

interface IProps{
    choosenPokemon: IPokemonInfo
}

const ChoosenPokemon:FC <IProps> = ({choosenPokemon}) => {
    return (
        <div>
            <h3>{choosenPokemon.name}</h3>
            <div>Pokemon id: {choosenPokemon.id}</div>
            <div>Pokemon weight: {choosenPokemon.weight}</div>
        </div>
    );
};

export default ChoosenPokemon;