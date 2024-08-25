import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../redux/store';
import { pokemonActions } from '../redux/slices/pokemonSlice';
import PokemonList from '../components/pokemonList/PokemonList';

const PokemonListPage = () => {

    let {pokemonSlice:{pokemon }} = useAppSelector(state => state)

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonActions.loadPokemon());
    }, []);
    return (
        <div>
            {pokemon.map((pokemon, i) =><PokemonList  key ={i} pokemon = {pokemon}/>)}
        </div>
    );
};

export default PokemonListPage;