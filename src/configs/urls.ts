const baseURL = "https://pokeapi.co/api/v2"

const baseImgURL= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const urls = {
    pokemon: {
        base: "/pokemon",
        byName: (name:string):string =>urls.pokemon.base+ `/` + `${name}`
    },
    ability: {
        base: "/ability",
        byAbility: (abilityName:string):string =>urls.ability.base+ `/` + `${abilityName}`
    },
    type: {
        base: "/type",
        byType: (typeName:string):string =>urls.type.base+ `/` + `${typeName}`
    },
    image: {
        main: (id: string):string => `/`+`${id}`+`.png`
    }
}

export {baseURL, baseImgURL, urls}