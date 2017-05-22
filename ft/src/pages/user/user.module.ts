import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SharedModule } from "../../shared/shared.module";

import { UserService } from "./user.service";

import { PerinfoComponent } from "./perinfo/perinfo.component";

@NgModule({
  declarations: [
    PerinfoComponent
  ],
  imports: [
    SuperTabsModule,
    SharedModule,
    Ionic2RatingModule
  ],
  entryComponents: [
    PerinfoComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
