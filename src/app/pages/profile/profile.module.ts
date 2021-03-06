import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { ProfileService } from '../../services/profile.service';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage
      }
    ]),
    ComponentsModule
  ],
  declarations: [ProfilePage],
  providers: [ProfileService]
})
export class ProfilePageModule {}
