import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { typesActions } from '../../redux/slices/typesSlice';
import PokemonListByType from '../../components/pokemonListByType/PokemonListByType';

const PokemonByTypePage = () => {
    let { typeName } = useParams();

    let dispatch = useAppDispatch();

    let type = useAppSelector(state => state.typesSlice.type)

    useEffect(() => {
        if (typeName) dispatch(typesActions.loadByType(typeName))
    }, [typeName]);

    return (
        <div>
            <PokemonListByType type={type}/>
        </div>
    );
};

export default PokemonByTypePage;