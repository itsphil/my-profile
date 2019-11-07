import * as fromProfile from '../actions/profile.action';
import { Profile } from '../models/profile';

export interface ProfileState {
  data: Profile;
}

export const initialState: ProfileState = {
  data: {
    age: 39,
    commercialExperience: 10,
    currentEmployment: 'John Smith Industries',
    currentEmploymentSince: 2008,
    description: 'Lorem ipsum dolor',
    linkCodepen: 'http://codepen.io/johnsmith',
    linkGithub: 'http://github.com/johnsmith',
    linkTwitter: 'http://twitter.com/johnsmith',
    location: 'London, England',
    name: 'John Smith',
    noticePeriod: '1 Month'
  }
};

export function reducer(
  state = initialState,
  action: fromProfile.ActionsUnion
): ProfileState {
  switch (action.type) {
    case fromProfile.ActionTypes.EditProfile: {
      return {
        ...state,
        data: action.payload.profile
      };
    }

    default: {
      return state;
    }
  }
}

export const getProfile = (state: ProfileState) => state.data;
