export const ContentReducer = (state = {}, action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'SET_CONTENT':
            return {
                ...state,
                [payload.username]: payload.content
            }
        case 'ADD_CONTENT':
            newpay=state[payload.username]+payload.content
            return {
                ...state,
                [payload.username]:newpay
            }
        default:
            return state
    }
};
