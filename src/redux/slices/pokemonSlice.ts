import { createSlice, isRejected } from "@reduxjs/toolkit";
import { IPokemonData } from "../../models/IPokemonData";
import { IPokemonInfo } from "../../models/IPokemonInfo";
import {loadChoosenPokemon, loadPokemon } from "../reducers/pokemon.extra.reducers";


type PokemonSliceType = {
    pokemon: IPokemonData[],
    choosenPokemon: IPokemonInfo|any,
    isLoaded: boolean,
    error: string
}

const pokemonInitState: PokemonSliceType = {
    pokemon: [],
    choosenPokemon: null,
    isLoaded: false,
    error: ''
}

export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: pokemonInitState,
    reducers: {},
    extraReducers: builder =>
       builder
           .addCase(
               loadPokemon.fulfilled,
               (state, action) =>{
                   state.pokemon = action.payload
           })
           .addCase(
               loadChoosenPokemon.fulfilled,
               (state, action)=>{
                   state.choosenPokemon = action.payload;
           })
           .addMatcher(isRejected(loadPokemon, loadChoosenPokemon),
               (state, action) => {
                    state.error = action.payload as string;
               }
           )

})
export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemon,
    loadChoosenPokemon
}