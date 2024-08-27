import { createSlice, isRejected } from "@reduxjs/toolkit";
import { IPokemonData } from "../../models/IPokemonData";

import { IAbility } from "../../models/IAbility";
import {loadAbilities, loadByAbility} from "../reducers/abilities.extra.reducers";


type AbilitiesSliceType = {
    count: number,
    abilities: IPokemonData[],
    ability: IAbility|any,
    isLoaded: boolean,
    error: string
}

const abilityInitState: AbilitiesSliceType = {
    count: 0,
    abilities: [],
    ability: '',
    isLoaded: false,
    error: ''
}

export const abilitiesSlice = createSlice({
    name: "abilitiesSlice",
    initialState: abilityInitState,
    reducers: { },
    extraReducers: builder =>
       builder
           .addCase(
               loadAbilities.fulfilled,
               (state, action) =>{
                   state.abilities = action.payload.results
                   state.count = Math.ceil(action.payload.count/20)
           })
           .addCase(
               loadByAbility.fulfilled,
               (state, action)=>{
                   state.ability = action.payload;
           })

           .addMatcher(isRejected(loadAbilities, loadByAbility),
               (state, action) => {
                    state.error = action.payload as string;
               }
           )

})


export const abilitiesActions = {
    ...abilitiesSlice.actions,
    loadAbilities,
    loadByAbility
}