import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonService } from "../../services/pokemon.service";
import { AxiosError } from "axios";

export const loadTypes = createAsyncThunk(
    'typesSlice/loadTypes',
    async (offset:string, thunkAPI) => {
        try {
            let response = await pokemonService.getTypes(offset);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

export const loadByType = createAsyncThunk(
    'typesSlice/loadByType',
    async (typeName:string, thunkAPI) => {
        try {
            let response = await pokemonService.getByType(typeName);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

