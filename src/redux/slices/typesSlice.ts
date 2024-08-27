import { createSlice, isRejected } from "@reduxjs/toolkit";
import { IPokemonData } from "../../models/IPokemonData";
import { IType } from "../../models/IType";
import {loadByType, loadTypes } from "../reducers/types.extra.reducers";



type TypesSliceType = {
    count: number,
    types: IPokemonData[],
    type: IType|any,
    isLoaded: boolean,
    error: string
}

const typeInitState: TypesSliceType = {
    count: 0,
    types: [],
    type: '',
    isLoaded: false,
    error: ''
}

export const typesSlice = createSlice({
    name: "typesSlice",
    initialState: typeInitState,
    reducers: { },
    extraReducers: builder =>
       builder
           .addCase(
               loadTypes.fulfilled,
               (state, action) =>{
                   state.types = action.payload.results
                   state.count = Math.ceil(action.payload.count/20)
           })
           .addCase(
               loadByType.fulfilled,
               (state, action)=>{
                   state.type = action.payload;
           })

           .addMatcher(isRejected(loadTypes, loadByType),
               (state, action) => {
                    state.error = action.payload as string;
               }
           )

})


export const typesActions = {
    ...typesSlice.actions,
    loadTypes,
    loadByType
}