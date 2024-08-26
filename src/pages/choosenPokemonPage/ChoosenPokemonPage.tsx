import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { pokemonActions } from '../../redux/slices/pokemonSlice';
import ChoosenPokemon from '../../components/chosenPokemon/ChoosenPokemon';



const ChoosenPokemonPage = () => {
    let { name } = useParams();

    let dispatch = useAppDispatch();

    let choosenPokemon = useAppSelector(state => state.pokemonSlice.choosenPokemon)

    useEffect(() => {
        if (name) dispatch(pokemonActions.loadChoosenPokemon(name))
    }, [name]);


    return (
        <div>
            <ChoosenPokemon choosenPokemon={choosenPokemon}/>

        </div>
    );
};

export default ChoosenPokemonPage;