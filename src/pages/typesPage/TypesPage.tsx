import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../redux/store';
import { typesActions } from '../../redux/slices/typesSlice';
import TypesList from '../../components/typesList/TypesList';
import Pagination from '../../components/pagination/Pagination';
import css from './TypesPage.module.css'

const TypesPage = () => {
    let [searchParams] = useSearchParams();
    let page = searchParams.get('page')

    let offset:string;
    if (page) {offset = (+page*20-20).toString()}


    let {typesSlice:{types, count }} = useAppSelector(state => state)

    let dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(typesActions.loadTypes(offset));

    }, [page]);

    return (
        <div className={css.container}>
            <div className={css.typeCardBlock}> {types.map((type, i) => <TypesList key={i} type={type}/>)} </div>
            <div><Pagination count={count}/></div>
        </div>
    );
};

export default TypesPage;