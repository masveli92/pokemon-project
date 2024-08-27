import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { abilitiesActions } from '../../redux/slices/abilitiesSlice';
import ListByAbility from '../../components/listByAbility/ListByAbility';

const PokemonByAbilityPage = () => {
    let { abilityName } = useParams();

    let dispatch = useAppDispatch();

    let ability = useAppSelector(state => state.abilitiesSlice.ability)

    useEffect(() => {
        if (abilityName) dispatch(abilitiesActions.loadByAbility(abilityName))
    }, [abilityName]);

    console.log(ability)

    return (
        <div>
            <ListByAbility ability = {ability}/>
        </div>
    );
};

export default PokemonByAbilityPage;