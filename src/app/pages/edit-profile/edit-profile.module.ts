import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { ProfileService } from '../../services/profile.service';

import { EditProfilePage } from './edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditProfilePage
      }
    ]),
    ComponentsModule
  ],
  declarations: [EditProfilePage],
  providers: [ProfileService]
})
export class EditProfilePageModule {}
