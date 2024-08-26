import axios from "axios"
import {baseURL, urls} from "../configs/urls"
import { IPokemonInfo } from "../models/IPokemonInfo"
import { IPokemonRes } from "../models/IPokemonRes"

const axiosInstance = axios.create({
    baseURL,
    headers: {}
})

const pokemonService = {
    getAll: async (offset:string): Promise <IPokemonRes>  => {
       const response = await axiosInstance.get<IPokemonRes>(urls.pokemon.base + '?offset='+ offset + '&limit=20')
        return response.data
    },
    getByName: async (name: string): Promise<IPokemonInfo> => {
        const response = await axiosInstance.get<IPokemonInfo>(urls.pokemon.byName(name))
        return response.data
    }


}
export {pokemonService}