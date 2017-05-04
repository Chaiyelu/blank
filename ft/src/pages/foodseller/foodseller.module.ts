import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SharedModule } from "../../shared/shared.module";

import { MyApp } from '../../app/app.component';
import { FoodSellerComponent } from './foodseller.component';
import { FoodSellerDetailComponent } from './foodsellerdetail/foodsellerdetail.component';
import { FoodSellerService } from "./foodseller.service";
import { FoodSellerDetailService } from "./foodsellerdetail/foodsellerdetail.service";
import { SellerdetailComponent } from "./foodsellerdetail/sellerdetail/sellerdetail.component";
import { SellergoodsComponent } from "./foodsellerdetail/sellergoods/sellergoods.component";
import { SellerratingsComponent } from "./foodsellerdetail/sellerratings/sellerratings.component";
import { SellerheaderComponent } from "./foodsellerdetail/sellerheader/sellerheader.component";


@NgModule({
  declarations: [
    FoodSellerComponent,
    FoodSellerDetailComponent,
    SellerdetailComponent,
    SellergoodsComponent,
    SellerratingsComponent,
    SellerheaderComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: FoodSellerComponent, name: 'FoodSeller', segment: 'foodseller' },
        { component: FoodSellerDetailComponent, name: 'FoodSellerDetail', segment: 'foodseller/:id' }
      ]
    }),
    SuperTabsModule,
    SharedModule
  ],
  entryComponents: [
    FoodSellerComponent,
    FoodSellerDetailComponent,
    SellerdetailComponent,
    SellergoodsComponent,
    SellerratingsComponent,
    SellerheaderComponent
  ],
  providers: [
    FoodSellerService,
    FoodSellerDetailService
  ]
})
export class FoodSellerModule { }

