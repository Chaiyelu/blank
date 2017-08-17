import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { CityPickerModule } from  "ionic2-city-picker"
import { Ionic2RatingModule } from 'ionic2-rating';
import { SharedModule } from "../../shared/shared.module";

import { UserService } from "./user.service";
import { DeliveryService } from "./perinfo/delivery/delivery.service";
import { CollectionMerchantService } from "./collect/merchant/merchant.service";

import { PerinfoComponent } from "./perinfo/perinfo.component";
import { DeliveryComponent } from "./perinfo/delivery/delivery.component";
import { DeliveryFormComponent } from "./perinfo/delivery/delivery-form/delivery-form.component";
import { UsernameComponent } from "./perinfo/username/username.component";
import { BirthdayComponent } from "./perinfo/birthday/birthday.component";
import { SetComponent } from "./set/set.component";
import { CollectComponent } from "./collect/collect.component";
import { MerchantComponent } from "./collect/merchant/merchant.component";
import { ContentComponent } from "./collect/content/content.component";
import { GroupComponent } from "./collect/group/group.component";

@NgModule({
  declarations: [
    PerinfoComponent,
    DeliveryComponent,
    DeliveryFormComponent,
    UsernameComponent,
    BirthdayComponent,
    SetComponent,
    CollectComponent,
    MerchantComponent,
    ContentComponent,
    GroupComponent
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
    DeliveryFormComponent,
    UsernameComponent,
    BirthdayComponent,
    SetComponent,
    CollectComponent,
    MerchantComponent,
    ContentComponent,
    GroupComponent
  ],
  exports: [
    PerinfoComponent,
    DeliveryComponent,
    DeliveryFormComponent,
    UsernameComponent,
    BirthdayComponent,
    SetComponent,
    CollectComponent,
    MerchantComponent,
    ContentComponent,
    GroupComponent
  ],
  providers: [
    UserService,
    DeliveryService,
    CollectionMerchantService
  ]
})
export class UserModule { }
