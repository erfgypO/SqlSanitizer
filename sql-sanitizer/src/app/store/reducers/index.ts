import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { FormatRequest } from 'src/app/models/format-request';
import * as FormatActions from '../actions/format-actions';


export interface State {
  requests: FormatRequest[];
}

export const initialState: State = {
  requests: []
};

const stateReducer = createReducer(
  initialState,
  on(FormatActions.format, (state, { requestBody }) => ({...state, requests: [...state.requests, requestBody]}))
);

export function reducer(state: State | undefined, action: Action) {
  return stateReducer(state, action);
}
