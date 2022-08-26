export const logger = (store) => (next) => (action) => {
    let result = next(action);
    console.log({
        'dispatch': action,
        'next state': store.getState()
    })
    return result;
};
