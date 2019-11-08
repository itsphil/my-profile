import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Profile } from '../models/profile';
import * as ProfileActions from '../actions/profile.action';
import { AppState, getProfile } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Observable<Profile>;

  constructor(private store: Store<AppState>) {
    this.init();
  }

  private init(): void {
    this.profile = this.store.select(getProfile);
  }

  getProfile(): Observable<Profile> {
    return this.store.select(getProfile);
  }

  editProfile(profile: Profile): void {
    this.store.dispatch(new ProfileActions.EditProfile({ profile }));
  }

  getProfileForm(profile: Profile): FormGroup {
    return new FormGroup({
        age: new FormControl(profile.age, Validators.required),
        commercialExperience: new FormControl(profile.commercialExperience, Validators.required),
        currentEmployment: new FormControl(profile.currentEmployment, Validators.required),
        currentEmploymentSince: new FormControl(profile.currentEmploymentSince, Validators.required),
        description: new FormControl(profile.description, Validators.required),
        linkCodepen: new FormControl(profile.linkCodepen),
        linkGithub: new FormControl(profile.linkGithub),
        linkTwitter: new FormControl(profile.linkTwitter),
        location: new FormControl(profile.location, Validators.required),
        name: new FormControl(profile.name, Validators.required),
        noticePeriod: new FormControl(profile.noticePeriod, Validators.required)
    });
  }
}
