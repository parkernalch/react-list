import uuid from 'uuid';
import { GET_CHARACTERS, ADD_CHARACTER, DELETE_CHARACTER } from '../actions/types';

const initialState = {
    characters: [
        {id: uuid(), name: 'Hector'},
        {id: uuid(), name: 'Garen'},
        {id: uuid(), name: 'Sukorb'},
        {id: uuid(), name: 'Vik'}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(character => character.id !== action.payload)
            }
        default:
            return state;
    }
}