// import _ from 'lodash';
// import { createSelector } from 'reselect';
import { ReducerStateMap } from 'app/types';

// App status
export const isLoadingSelector = (state: ReducerStateMap): boolean => {
  return state.appReducer.get('isLoading');
};
export const isMaintainingSelector = (state: ReducerStateMap): boolean => {
  return state.appReducer.get('isMaintaining');
};
export const tokenSelector = (state: ReducerStateMap): string => {
  return state.appReducer.get('token');
};
export const isCheckedLoginSelector = (state: ReducerStateMap): boolean => {
  return state.appReducer.get('isCheckedLogin');
};

export const userProfileSelector = (state: ReducerStateMap) => {
  return state.appReducer.get('userProfile');
};
