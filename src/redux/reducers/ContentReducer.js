export const ContentReducer = (state = {}, action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'SET_CONTENT':
            return {
                ...state,
                [payload.username]: payload.content
            }
        default:
            return state
    }
};
