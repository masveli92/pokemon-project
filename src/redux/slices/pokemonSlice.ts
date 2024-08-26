import { createSlice, isRejected } from "@reduxjs/toolkit";
import { IPokemonData } from "../../models/IPokemonData";
import { IPokemonInfo } from "../../models/IPokemonInfo";
import {loadChoosenPokemon, loadImage, loadPokemon } from "../reducers/pokemon.extra.reducers";

type PokemonSliceType = {
    pokemon: IPokemonData[],
    choosenPokemon: IPokemonInfo|any,
    image: string,
    isLoaded: boolean,
    error: string
}

const pokemonInitState: PokemonSliceType = {
    pokemon: [],
    image: '',
    choosenPokemon: '',
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
           .addCase(
               loadImage.fulfilled,
               (state, action ) =>{
                   state.image = action.payload;
               }
           )
           .addMatcher(isRejected(loadPokemon, loadChoosenPokemon, loadImage),
               (state, action) => {
                    state.error = action.payload as string;
               }
           )

})
export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemon,
    loadChoosenPokemon,
    loadImage
}