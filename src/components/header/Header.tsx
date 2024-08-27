import React from 'react';
import { Link } from 'react-router-dom';
import { SearchInput } from '../searchByName/SearchInput';
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.container}>
            <Link  className = {css.link} to = {'/allPokemon'}> <h2>ALL POKEMON</h2></Link>
            <Link  className = {css.link} to = {'/ability'}> <h2>ABILITIES</h2></Link>
            <Link  className = {css.link} to = {'/type'}> <h2>TYPES</h2></Link>
            <SearchInput/>
        </div>
    );
};

export default Header;