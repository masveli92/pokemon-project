import React, { FC } from 'react';
import { IPokemonInfo } from '../../models/IPokemonInfo';
import css from './ChoosenPokemon.module.css'
import { Link } from 'react-router-dom';

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
                    <h3>Types:</h3>
                    <div>{choosenPokemon?.types?.map((type, index) => <Link className={css.link} to ={/type/ + type.type.name} key={index}> <h4>{type.type.name} </h4></Link>)}</div>
                </div>

                <div>
                    <h4>Stats:</h4>
                    <ul>{choosenPokemon?.stats?.map((stat, index) => <li
                    key={index}>{stat.stat.name} - {stat.base_stat}</li>)}</ul>
                </div>

                <div>
                    <h3>Abilities:</h3>
                    <div>{choosenPokemon?.abilities?.map((ability, index) => <Link className={css.link} to ={/ability/ + ability.ability.name}
                        key={index}><h4> {ability.ability.name} </h4></Link>)}</div>
                </div>
            </div>
            {/*<div>Pokemon weight: {choosenPokemon.weight}</div>*/}

            {/*<div>Pokemon id: {choosenPokemon.id}</div>*/}
        </div>
    )
        ;
};

export default ChoosenPokemon;