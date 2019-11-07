import {
  createSelector,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import * as fromProfile from './profile.reducer';

export interface AppState {
  profile: fromProfile.ProfileState;
}

export const reducers: ActionReducerMap<AppState> = {
  profile: fromProfile.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getProfileState = (state: AppState) => state.profile;

export const getProfile = createSelector(
  getProfileState,
  fromProfile.getProfile
);
