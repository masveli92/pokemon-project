import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to = {'/allPokemon'}> All pokemon Page</Link>
        </div>
    );
};

export default Header;