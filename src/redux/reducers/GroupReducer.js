export const GroupReducer = (state = [], action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'GROUP_UPDATE':
      return payload;
    case 'GROUP_PUSH':
      let exist = state.filter(v => v.uuid === payload.uuid);
      if (exist.length === 0) {
        return [
          ...state,
          payload,
        ];
      }
      state[state.indexOf(exist[0])] = payload;
      return [...state];
    case 'GROUP_REMOVE':
      return [...state.filter(v => v.uuid !== payload)];
    default:
      return state;
  }
};
