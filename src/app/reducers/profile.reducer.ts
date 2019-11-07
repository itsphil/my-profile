import * as fromProfile from '../actions/profile.action';
import { Profile } from '../models/profile';

export interface ProfileState {
  data: Profile[];
}

export const initialState: ProfileState = {
  data: []
};

export function reducer(
  state = initialState,
  action: fromProfile.ActionsUnion
): ProfileState {
  switch (action.type) {
    case fromProfile.ActionTypes.EditProfile: {
      return {
        ...state,
        data: [...state.data, action.payload.profile]
      };
    }

    default: {
      return state;
    }
  }
}

export const getProfile = (state: ProfileState) => state.data;
