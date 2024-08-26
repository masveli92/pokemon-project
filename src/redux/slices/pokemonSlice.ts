import { createSlice, isRejected } from "@reduxjs/toolkit";
import { IPokemonData } from "../../models/IPokemonData";
import { IPokemonInfo } from "../../models/IPokemonInfo";
import {loadChoosenPokemon, loadImage, loadPokemon } from "../reducers/pokemon.extra.reducers";


type PokemonSliceType = {
    count: number,
    pokemon: IPokemonData[],
    choosenPokemon: IPokemonInfo|any,
    image: string,
    isLoaded: boolean,
    error: string
}

const pokemonInitState: PokemonSliceType = {
    count: 0,
    pokemon: [],
    image: '',
    choosenPokemon: '',
    isLoaded: false,
    error: ''
}

export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: pokemonInitState,
    reducers: { },
    extraReducers: builder =>
       builder
           .addCase(
               loadPokemon.fulfilled,
               (state, action) =>{
                   state.pokemon = action.payload.results
                   state.count = Math.ceil(action.payload.count/20)
           })
           .addCase(
               loadChoosenPokemon.fulfilled,
               (state, action)=>{
                   state.choosenPokemon = action.payload;
           })
           // .addCase(
           //     loadImage.fulfilled,
           //     (state, action ) =>{
           //         state.image = action.payload;
           //     }
           // )
           .addMatcher(isRejected(loadPokemon, loadChoosenPokemon),
               (state, action) => {
                    state.error = action.payload as string;
               }
           )

})


export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemon,
    loadChoosenPokemon,
    loadImage,

}