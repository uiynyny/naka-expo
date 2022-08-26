export const MessageReducer = (state = {}, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'MESSAGE_UPDATE':
      return {
        ...state,
        [payload.groupUuid]: payload.content,
      };
    case 'MESSAGE_PUSH':
      let prev = [];
      if (state[payload.groupUuid] !== undefined)
        prev = [...state[payload.groupUuid]];
      let current = prev.unshift(payload.content);
      return {
        ...state,
        [payload.groupUuid]: prev,
      };
    default:
      return state;
  }
};
