import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonService } from "../../services/pokemon.service";
import { AxiosError } from "axios";
import { imageService } from "../../services/image.service";

export const loadPokemon = createAsyncThunk(
    'pokemonSlice/loadPokemon',
    async (offset:string, thunkAPI) => {
        try {
            let response = await pokemonService.getAll(offset);
            return thunkAPI.fulfillWithValue(response);
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
            let response = await pokemonService.getByName(name);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

export const loadImage = createAsyncThunk(
    'pokemonSlice/loadImage',
    async (id:string, thunkAPI) => {
        try {
           let response = await imageService.getImg(id);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)
