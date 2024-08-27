import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";
import HomePage from "../pages/homePage/HomePage";
import ChoosenPokemonPage from "../pages/choosenPokemonPage/ChoosenPokemonPage";
import AbilitiesPage from "../pages/abilitiesPage/AbilitiesPage";
import PokemonByAbilityPage from "../pages/pokemonByAbilityPage/PokemonByAbilityPage";
import TypesPage from "../pages/typesPage/TypesPage";
import PokemonByTypePage from "../pages/pokemonByTypePage/PokemonByTypePage";


export const router = createBrowserRouter([
    {  path:'/',
       element: <MainLayout/>,
        children: [
            {index: true, element: <PokemonListPage/>},
            {path: 'allPokemon', element: <PokemonListPage/>},
            {path: 'pokemon/:name', element: <ChoosenPokemonPage/>},
            {path: 'ability', element: <AbilitiesPage/>},
            {path: 'ability/:abilityName', element: <PokemonByAbilityPage/>},
            {path: 'type', element: <TypesPage/>},
            {path: 'type/:typeName', element: <PokemonByTypePage/>}
        ]
    }
]);
