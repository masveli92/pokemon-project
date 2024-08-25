import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PokemonListPage from "../pages/PokemonListPage";
import ChoosenPokemonPage from "../pages/ChoosenPokemonPage";

export const router = createBrowserRouter([
    {  path:'/',
       element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'allPokemon', element: <PokemonListPage/>},
            {path: 'pokemon/:name', element: <ChoosenPokemonPage/>}
        ]
    }
]);
