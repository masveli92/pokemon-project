import React, { FC } from 'react';
import { IPokemonData } from '../../models/IPokemonData';
import { Link } from 'react-router-dom';
import css from './AbilitiesList.module.css'


interface IProps{
    ability: IPokemonData
}

const PokemonList:FC<IProps> = ({ability}) => {

    return (
        <div className={css.abilityCard}>
            <Link className={css.link} to={'/ability/' + ability.name}>
                <h3>{ability.name}</h3>
            </Link>
        </div>
    );
};

export default PokemonList;