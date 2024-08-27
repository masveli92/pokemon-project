import React, { FC } from 'react';
import { IPokemonData } from '../../models/IPokemonData';
import { Link } from 'react-router-dom';
import css from "./TypesList.module.css"

interface IProps{
    type: IPokemonData
}

const TypesList:FC<IProps> = ({type}) => {
    return (
        <div className={css.typeCard}>
            <Link className={css.link} to={'/type/' + type.name}>
                <h3>{type.name}</h3>
            </Link>
        </div>
    );
};

export default TypesList;