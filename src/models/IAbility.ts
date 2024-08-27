import { IPokemonData } from "./IPokemonData";

export interface IAbility{
    "id": number,
    "name": string,
    "pokemon": IAbilityPokemonList[]
}


export interface IAbilityPokemonList{
    "is_hidden": boolean,
    "pokemon": IPokemonData,
    "slot": number
}