import React, { FC } from 'react';
import { IType } from '../../models/IType';
import PokemonList from '../pokemonList/PokemonList';
import css from "./PokemonListByType.module.css"

interface IProps{
    type: IType
}

const PokemonListByAbility:FC <IProps> = ({type}) => {

    console.log(type.id)
    return (
        <div className={css.container} >
            <h2> type: {type.name}</h2>
            <div className={css.pokemonCardContainer}> {type?.pokemon?.map((pokemon, index)=><PokemonList  key ={index} pokemon = {pokemon.pokemon}/> )}</div>
        </div>
    );
};

export default PokemonListByAbility;