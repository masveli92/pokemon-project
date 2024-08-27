import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;