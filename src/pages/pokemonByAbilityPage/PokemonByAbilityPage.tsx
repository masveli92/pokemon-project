import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { abilitiesActions } from '../../redux/slices/abilitiesSlice';
import PokemonListByAbility from '../../components/pokemonListByAbility/PokemonListByAbility';



const PokemonByAbilityPage = () => {
    let { abilityName } = useParams();

    let dispatch = useAppDispatch();

    let ability = useAppSelector(state => state.abilitiesSlice.ability)

    useEffect(() => {
        if (abilityName) dispatch(abilitiesActions.loadByAbility(abilityName))
    }, [abilityName]);

    return (
        <div>
            <PokemonListByAbility ability = {ability}/>
        </div>
    );
};

export default PokemonByAbilityPage;