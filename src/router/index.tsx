import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import HomePage from "../pages/homePage/HomePage";
import ChoosenPokemonPage from "../pages/choosenPokemonPage/ChoosenPokemonPage";


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
