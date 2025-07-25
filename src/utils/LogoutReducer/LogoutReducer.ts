export const logoutReducer = (reducer: any) => {
  const initial = reducer(undefined, { type: '@@INIT' });
  return (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
      return initial;
    }
    return reducer(state, action);
  };
};
