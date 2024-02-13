import { SET_QUOTE, SET_RANDOM_COLOR } from "../action/action"
import  QuotesData  from "../data"; 

const initialState = {
  currentQuote: QuotesData[0].quote, 
  currentAuthor: QuotesData[0].author, 
  randomColor: '',
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return{
            ...state,
            currentQuote:action.payload
            }
            case SET_RANDOM_COLOR:
                return {
                    ...state,
                    randomColor:action.payload,
                }
            default:
                return state;
            
    }
}

export default quoteReducer;