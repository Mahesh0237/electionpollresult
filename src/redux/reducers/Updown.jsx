const initialState = 0;
export const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'reset': return state = 0;
        default: return state
    }
}