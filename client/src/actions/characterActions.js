import { GET_CHARACTERS, ADD_CHARACTER, DELETE_CHARACTER } from './types';

export const getCharacters = () => {
    return {
        type: GET_CHARACTERS
    };
};

export  const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: character
    }
}