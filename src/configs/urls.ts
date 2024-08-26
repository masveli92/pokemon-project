const baseURL = "https://pokeapi.co/api/v2"

const baseImgURL= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const urls = {
    pokemon: {
        base: "/pokemon",
        byName: (name:string):string =>urls.pokemon.base+ `/` + `${name}`
    },
    image: {
        main: (id: string):string => `/`+`${id}`+`.png`
    }
}

export {baseURL, baseImgURL, urls}