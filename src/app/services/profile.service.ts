import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Profile } from '../models/profile';
import * as ProfileActions from '../actions/profile.action';
import { AppState, getProfile } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profile: Observable<Profile>;

  constructor(private store: Store<AppState>) {
    this.profile = this.store.select(getProfile);
  }

  getNote(): Observable<Profile> {
    return this.store.select(getProfile);
  }

  editProfile(profile: Profile): void {
    this.store.dispatch(new ProfileActions.EditProfile({ profile }));
  }
}
