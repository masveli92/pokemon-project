import { IPokemonAbility } from "./IPokemonAbilities"
import { IPokemonData } from "./IPokemonData"
import { IPokemonSprites } from "./IPokemonSprites"
import { IPokemonStats } from "./IPokemonStats"
import { IPokemonTypes } from "./IPokemonTypes"


export interface IPokemonInfo{
        abilities: IPokemonAbility[],
        base_experience: number,
        forms: IPokemonData[],
        height: number,
        held_items: [],
        id: number,
        is_default: boolean,
        location_area_encounters: string,
        name: string,
        order: number,
    past_abilities: [],
    past_types: [],
    species: IPokemonData,
    stats: IPokemonStats[],
    types: IPokemonTypes[],
    sprites: IPokemonSprites,
    weight: number

}



