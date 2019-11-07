import { Component } from '@angular/core';

import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  public profile: Profile;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

}
