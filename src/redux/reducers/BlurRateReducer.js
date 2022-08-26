export const BlurRateReducer = (state = {}, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'BLUR_UPDATE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
