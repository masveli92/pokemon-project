import React, { FC } from 'react';
import { IPokemonInfo } from '../../models/IPokemonInfo';

interface IProps{
    choosenPokemon: IPokemonInfo
}

const ChoosenPokemon:FC <IProps> = ({choosenPokemon}) => {
    return (
        <div>
            <div>{choosenPokemon.name}</div>
            <div>{choosenPokemon.id}</div>
            <div>{choosenPokemon.weight}</div>
        </div>
    );
};

export default ChoosenPokemon;