import {urls} from "../configs/urls"
import { IPokemonInfo } from "../models/IPokemonInfo"
import { IPokemonRes } from "../models/IPokemonRes"
import { axiosInstance } from "./axios.service"

const pokemonService = {
    getAll: async (): Promise <IPokemonRes>  => {
       const response = await axiosInstance.get<IPokemonRes>(urls.pokemon.base)
        return response.data
    },
    getByName: async (name: string): Promise<IPokemonInfo> => {
        const response = await axiosInstance.get<IPokemonInfo>(urls.pokemon.byName(name))
        return response.data
    }


}
export {pokemonService}