import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../redux/store';


const Pagination = () => {

    let [searchParams, setSearchParams] = useSearchParams({page:'1'});
    let {count} = useAppSelector(state => state.pokemonSlice)


const currentPage = +(searchParams.get('page') || "1")
const increment = ()=>{

    let nextPage = (currentPage+1).toString();
    setSearchParams({page:nextPage})
}

const decrement = ()=>{
        let nextPage = (currentPage-1).toString();
        setSearchParams({page:nextPage})
    }


    return (
        <div>
            <button disabled={currentPage<=1} onClick={decrement}>previous  </button>
            <span > {currentPage}/{count} </span>
            <button disabled={currentPage>=66} onClick={increment}>next</button>
        </div>
    );
};

export default Pagination;