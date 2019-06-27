import {
    GET_ERRORS,
    CLEAR_ERRORS
} from "./types";

// Return errors 
export const returnErrors = (message, status, id=null) => {
    return {
        type: GET_ERRORS,
        payload: {
            message: message, 
            status: status,
            id: id
        }
    }
}

// Clear Errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}