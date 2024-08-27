import React, { FC } from 'react';
import { IAbility } from '../../models/IAbility';
import PokemonList from '../pokemonList/PokemonList';
import css from './PokemonListByAbility.module.css'

interface IProps{
    ability: IAbility
}

const PokemonListByAbility:FC <IProps> = ({ability}) => {

    return (
        <div className={css.container}>
            <h2> ability: {ability.name}</h2>
            <div className={css.pokemonCardContainer}> {ability?.pokemon?.map((pokemon, index)=><PokemonList  key ={index} pokemon = {pokemon.pokemon}/> )}</div>
        </div>
    );
};

export default PokemonListByAbility;