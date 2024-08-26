import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to = {'/allPokemon'}> <h2>ALL POKEMON</h2></Link>
        </div>
    );
};

export default Header;