import { IPokemonData } from "./IPokemonData";

export interface IPokemonRes{
    count: number,
    next: string|null,
    previous: string|null,
    results: IPokemonData[]
}
