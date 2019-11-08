import * as fromProfile from '../actions/profile.action';
import { Profile } from '../models/profile';

export interface ProfileState {
  data: Profile;
}

let initialStateObj =  {
  data: {
    age: 39,
    commercialExperience: 10,
    currentEmployment: 'John Smith Industries',
    currentEmploymentSince: 2008,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada auctor mauris. Mauris non tempor lectus. Curabitur dolor quam, auctor ac massa nec, pretium interdum lacus.',
    linkCodepen: 'http://codepen.io/johnsmith',
    linkGithub: 'http://github.com/johnsmith',
    linkTwitter: 'http://twitter.com/johnsmith',
    location: 'London, England',
    name: 'John Smith',
    noticePeriod: '1 Month'
  }
};
const storedProfile = window.localStorage.getItem('myProfileData');

if (storedProfile) {
  initialStateObj = {
    data: JSON.parse(storedProfile)
  };
}

export const initialState: ProfileState = initialStateObj;

export function reducer(
  state = initialState,
  action: fromProfile.ActionsUnion
): ProfileState {
  switch (action.type) {
    case fromProfile.ActionTypes.EditProfile: {
      storeProfileData(action);

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

function storeProfileData(action) {
  window.localStorage.setItem('myProfileData', JSON.stringify(action.payload.profile));
}
