import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonService } from "../../services/pokemon.service";
import { AxiosError } from "axios";

export const loadPokemon = createAsyncThunk(
    'pokemonSlice/loadPokemon',
    async (_, thunkAPI) => {
        try {
            let responce = await pokemonService.getAll();
            return thunkAPI.fulfillWithValue(responce.results);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

export const loadChoosenPokemon = createAsyncThunk(
    'pokemonSlice/loadChoosenPokemon',
    async (name:string, thunkAPI) => {
        try {
            let responce = await pokemonService.getByName(name);
            return thunkAPI.fulfillWithValue(responce);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)
