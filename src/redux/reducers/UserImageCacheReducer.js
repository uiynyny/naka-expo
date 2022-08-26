export const UserImageCacheReducer = (state = {}, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'USER_IMAGE_UPDATE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
