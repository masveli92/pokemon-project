import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { pokemonActions } from "../../redux/slices/pokemonSlice";

const SearchInput = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const search = () => {
        if (inputValue.length>1) {
            dispatch(pokemonActions.loadChoosenPokemon(inputValue));

            navigate(`/pokemon/${inputValue}`);
            setInputValue('');
        } };



    return (
        <div>
            <input type="text" placeholder={'input pokemon name'}  value={inputValue} onChange={change}/>
            <button onClick={search}> Search </button>
        </div>
    );
};

export {SearchInput};