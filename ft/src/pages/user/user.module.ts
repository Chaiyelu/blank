import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SharedModule } from "../../shared/shared.module";

import { UserService } from "./user.service";



@NgModule({
  declarations: [

  ],
  imports: [
    SuperTabsModule,
    SharedModule,
    Ionic2RatingModule
  ],
  entryComponents: [

  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
