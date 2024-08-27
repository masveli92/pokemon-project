import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

interface IProps{
    count:number
}

const Pagination:FC<IProps> = ({count}) => {

    let [searchParams, setSearchParams] = useSearchParams({page:'1'});
    // let {count} = useAppSelector(state => state.pokemonSlice)

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
            <button disabled={currentPage>=count} onClick={increment}>next</button>
        </div>
    );
};

export default Pagination;