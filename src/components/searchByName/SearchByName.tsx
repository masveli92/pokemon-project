import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { pokemonActions } from '../../redux/slices/pokemonSlice';
import { useParams } from 'react-router-dom';
import ChoosenPokemon from '../chosenPokemon/ChoosenPokemon';

const SearchByName = () => {
    const dispatch=useAppDispatch()
    const { inputValue }=useParams()

    let choosenPokemon = useAppSelector(state => state.pokemonSlice.choosenPokemon)
    useEffect(()=>{
        if(inputValue){
            dispatch(pokemonActions.loadChoosenPokemon(inputValue))
        }
    },[inputValue, dispatch]);

    return (
        <div>
            <ChoosenPokemon choosenPokemon={choosenPokemon}/>
        </div>
    );
};

export default SearchByName;
