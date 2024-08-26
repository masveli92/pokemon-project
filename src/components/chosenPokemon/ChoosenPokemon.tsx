import React, { FC } from 'react';
import { IPokemonInfo } from '../../models/IPokemonInfo';
import css from './ChoosenPokemon.module.css'

interface IProps{
    choosenPokemon: IPokemonInfo
}

const ChoosenPokemon:FC <IProps> = ({choosenPokemon}) => {


    return (
        <div className={css.container}>
            <div className={css.leftBlock}>
                <div className={css.imageContainer}>
                    <img className={css.image} src={choosenPokemon?.sprites?.front_default} alt={choosenPokemon.name}/>
                    <img className={css.image} src={choosenPokemon?.sprites?.back_default} alt={choosenPokemon.name}/>
                </div>
                <h2>{choosenPokemon.name}</h2>
                <button>Pokemon form</button>
                <div className={css.formContainer}>{choosenPokemon?.forms?.map((form, index) => <div className={css.formBox} key={index}>{form.name}</div>)}</div>
            </div>

            <div className={css.rightBlock}>
                <div>
                    <h4>Types</h4>
                    <ul>{choosenPokemon?.types?.map((type, index) => <li key={index}>{type.type.name}</li>)}</ul>
                </div>

                <div>
                    <h4>Stats:</h4>
                    <ul>{choosenPokemon?.stats?.map((stat, index) => <li
                    key={index}>{stat.stat.name} - {stat.base_stat}</li>)}</ul>
                </div>

                <div>
                    <h4>Abilities:</h4>
                    <ul>{choosenPokemon?.abilities?.map((ability, index) => <li
                        key={index}>{ability.ability.name}</li>)}</ul>
                </div>
            </div>
            {/*<div>Pokemon weight: {choosenPokemon.weight}</div>*/}

            {/*<div>Pokemon id: {choosenPokemon.id}</div>*/}
        </div>
    )
        ;
};

export default ChoosenPokemon;