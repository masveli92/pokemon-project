import axios from "axios"
import {baseURL, urls} from "../configs/urls"
import { IPokemonInfo } from "../models/IPokemonInfo"
import { IPokemonRes } from "../models/IPokemonRes"
import { IAbility } from "../models/IAbility"
import { IType } from "../models/IType"

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
    },
    getAbilities: async (offset:string): Promise <IPokemonRes>  => {
        const response = await axiosInstance.get<IPokemonRes>(urls.ability.base + '?offset='+ offset + '&limit=20')
        return response.data
    },
    getByAbility: async (abilityName: string): Promise<IAbility> => {
        const response = await axiosInstance.get<IAbility>(urls.ability.byAbility(abilityName))
        return response.data
    },
    getTypes: async (offset:string): Promise <IPokemonRes>  => {
        const response = await axiosInstance.get<IPokemonRes>(urls.type.base + '?offset='+ offset + '&limit=20')
        return response.data
    },
    getByType: async (typeName: string): Promise<IType> => {
        const response = await axiosInstance.get<IType>(urls.type.byType(typeName))
        return response.data
    },

}
export {pokemonService}