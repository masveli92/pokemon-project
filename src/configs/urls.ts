const baseURL = "https://pokeapi.co/api/v2"

const urls = {
    pokemon: {
        base: "/pokemon",
        byName: (name:string):string =>urls.pokemon.base+ `/` + `${name}`
    }
}

export {baseURL, urls}