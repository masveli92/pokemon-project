import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonService } from "../../services/pokemon.service";
import { AxiosError } from "axios";

export const loadAbilities = createAsyncThunk(
    'abilitiesSlice/loadAbilities',
    async (offset:string, thunkAPI) => {
        try {
            let response = await pokemonService.getAbilities(offset);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

export const loadByAbility = createAsyncThunk(
    'abilitiesSlice/loadByAbility',
    async (abilityName:string, thunkAPI) => {
        try {
            let response = await pokemonService.getByAbility(abilityName);
            return thunkAPI.fulfillWithValue(response);
        }  catch (e){
            let er = e as AxiosError;
            return thunkAPI.rejectWithValue(er?.response?.data)
        }
    }
)

