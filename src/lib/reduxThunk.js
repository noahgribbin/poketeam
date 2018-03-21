export default store => next => action => {
  console.log('__ACTION__', action);
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};
