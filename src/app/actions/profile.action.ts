import { Action } from '@ngrx/store';
import { Profile } from '../models/profile';

export enum ActionTypes {
  EditProfile = '[Profile Service] Edit Profile'
}

export class EditProfile implements Action {
  readonly type = ActionTypes.EditProfile;

  constructor(public payload: { profile: Profile }) {}
}

export type ActionsUnion = EditProfile;
