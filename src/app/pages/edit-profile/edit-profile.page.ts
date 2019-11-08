import { Component } from '@angular/core';

import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.page.html',
  styleUrls: ['edit-profile.page.scss'],
})
export class EditProfilePage {
  public profile: Profile;

  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

}
