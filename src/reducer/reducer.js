import { SET_QUOTE } from "../action/action"


const initialState = {
    currentQuote: ''
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return{
            ...state,
            currentQuote:action.payload
            }
            default:
                return state;
            
    }
}

export default quoteReducer;