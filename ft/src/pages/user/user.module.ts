import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { CityPickerModule } from  "ionic2-city-picker"
import { Ionic2RatingModule } from 'ionic2-rating';
import { SharedModule } from "../../shared/shared.module";

import { UserService } from "./user.service";
import { DeliveryService } from "./perinfo/delivery/delivery.service";

import { PerinfoComponent } from "./perinfo/perinfo.component";
import { DeliveryComponent } from "./perinfo/delivery/delivery.component";
import { DeliveryFormComponent } from "./perinfo/delivery/delivery-form/delivery-form.component";

@NgModule({
  declarations: [
    PerinfoComponent,
    DeliveryComponent,
    DeliveryFormComponent
  ],
  imports: [
    SuperTabsModule,
    CityPickerModule,
    SharedModule,
    Ionic2RatingModule
  ],
  entryComponents: [
    PerinfoComponent,
    DeliveryComponent,
    DeliveryFormComponent
  ],
  providers: [
    UserService,
    DeliveryService
  ]
})
export class UserModule { }
