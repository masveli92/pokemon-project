import React, { FC } from 'react';
import { IPokemonData } from '../../models/IPokemonData';
import { Link } from 'react-router-dom';


interface IProps{
    pokemon: IPokemonData
}


const PokemonList:FC<IProps> = ({pokemon}) => {
    return (
        <div>
            <Link to={'/pokemon/'+ pokemon.name}>{pokemon.name}</Link>

        </div>
    );
};

export default PokemonList;