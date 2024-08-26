import React, { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../redux/store';
import { pokemonActions } from '../../redux/slices/pokemonSlice';
import PokemonList from '../../components/pokemonList/PokemonList';
import css from './PokemonListPage.module.css'
import Pagination from '../../components/pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const PokemonListPage = () => {
    let [searchParams] = useSearchParams();
    let page = searchParams.get('page')

    let offset:string;
    if (page) {offset = (+page*20-20).toString()}


    let {pokemonSlice:{pokemon }} = useAppSelector(state => state)

    let dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(pokemonActions.loadPokemon(offset));

    }, [page]);




    return (
        <div className={css.container}>
           <div className={css.pokemonCardContainer}> {pokemon.map((pokemon, i) =><PokemonList  key ={i} pokemon = {pokemon}/>)} </div>
           <div className={css.paginationContainer}> <Pagination/> </div>
        </div>
    );
};

export default PokemonListPage;