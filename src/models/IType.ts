import { IPokemonData } from "./IPokemonData"

export interface IType{
    damage_relations: {
        double_damage_from: IPokemonData[],
        double_damage_to: IPokemonData[],
        half_damage_from: IPokemonData[],
        half_damage_to: IPokemonData[],
        no_damage_from: IPokemonData[],
        no_damage_to: IPokemonData[]
    },
    id: number,
    name: string,
    pokemon: ITypePokemonList[]
}

export interface ITypePokemonList{
    pokemon: IPokemonData
    slot: number
}