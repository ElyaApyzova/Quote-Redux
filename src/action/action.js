export const SET_QUOTE = 'SET_QUOTE';
export const SET_RANDOM_COLOR = 'SET_RANDOM_COLOR';

export const setQuote = (quote) => ({
    type:SET_QUOTE,
    payload: quote,
})

export const setRandomColor = (color) => ({
    type:SET_RANDOM_COLOR,
    payload: color,
})