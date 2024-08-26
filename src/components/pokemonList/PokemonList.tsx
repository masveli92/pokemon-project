import React, { FC, useEffect } from 'react';
import { IPokemonData } from '../../models/IPokemonData';
import { Link } from 'react-router-dom';
import css from './PokemonList.module.css'
// import { useAppDispatch, useAppSelector } from '../../redux/store';
import { baseImgURL } from '../../configs/urls';
// import { pokemonActions } from '../../redux/slices/pokemonSlice';


interface IProps{
    pokemon: IPokemonData
}

const PokemonList:FC<IProps> = ({pokemon}) => {

    const pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

    // let dispatch = useAppDispatch();
    //
    // let pokemonImage = useAppSelector(state => state.pokemonSlice.image)
    //
    // useEffect(() => {
    //     if (pokemonId) dispatch(pokemonActions.loadImage(pokemonId))
    // }, [pokemonId]);


    const path = baseImgURL + `/` + pokemonId + `.png`

    return (
        <div className={css.pokemonCard}>
            <Link to={'/pokemon/' + pokemon.name}>
                {/*<img src={pokemonImage} alt={pokemonId}/>*/}
                <img src={path} alt={pokemonId}/>
                <h3>{pokemon.name}</h3>
            </Link>
        </div>
    );
};

export default PokemonList;