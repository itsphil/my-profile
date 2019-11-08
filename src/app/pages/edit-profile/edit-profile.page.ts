import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.page.html',
  styleUrls: ['edit-profile.page.scss'],
})
export class EditProfilePage {
  profileForm: FormGroup;

  constructor(private profileService: ProfileService, private router: Router) {
    this.initProfile();
  }

  private initProfile(): void {
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.initForm(profile);
    });
  }

  private initForm(profile: Profile): void {
    this.profileForm = this.profileService.getProfileForm(profile);
  }

  update(): void {
    this.profileService.editProfile(this.profileForm.value);

    this.router.navigate(['profile']);
  }
}
