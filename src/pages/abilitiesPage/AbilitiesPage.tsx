import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../redux/store';
import { abilitiesActions } from '../../redux/slices/abilitiesSlice';
import AbilitiesList from '../../components/abilitiesList/AbilitiesList';
import Pagination from '../../components/pagination/Pagination';
import css from './AbilitiesPage.module.css'

const AbilitiesPage = () => {
    let [searchParams] = useSearchParams();
    let page = searchParams.get('page')

    let offset:string;
    if (page) {offset = (+page*20-20).toString()}


    let {abilitiesSlice:{abilities, count }} = useAppSelector(state => state)

    let dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(abilitiesActions.loadAbilities(offset));

    }, [page]);



    return (
        <div className={css.container}>
            <div className={css.abilityCardBlock}> {abilities.map((ability, i) =><AbilitiesList  key ={i} ability = {ability}/>)} </div>
            <div> <Pagination count={count}/></div>
        </div>
    );
};

export default AbilitiesPage;