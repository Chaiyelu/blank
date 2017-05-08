import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SharedModule } from "../../shared/shared.module";

import { FoodSellerService } from "./foodseller.service";
import { FoodSellerDetailService } from "./foodsellerdetail/foodsellerdetail.service";

import { MyApp } from '../../app/app.component';
import { FoodSellerComponent } from './foodseller.component';
import { FoodSellerDetailComponent } from './foodsellerdetail/foodsellerdetail.component';
import { SellerdetailComponent } from "./foodsellerdetail/sellerdetail/sellerdetail.component";
import { SellergoodsComponent } from "./foodsellerdetail/sellergoods/sellergoods.component";
import { SellerratingsComponent } from "./foodsellerdetail/sellerratings/sellerratings.component";
import { SellerheaderComponent } from "./foodsellerdetail/sellerheader/sellerheader.component";
import { FooddetailComponent } from './foodsellerdetail/fooddetail/fooddetail.component';
import { HeaderdetailComponent } from "./foodsellerdetail/sellerheader/headerdetail/headerdetail.component";


@NgModule({
  declarations: [
    FoodSellerComponent,
    FoodSellerDetailComponent,
    SellerdetailComponent,
    SellergoodsComponent,
    SellerratingsComponent,
    SellerheaderComponent,
    FooddetailComponent,
    HeaderdetailComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: FoodSellerComponent, name: 'FoodSeller', segment: 'foodseller' },
        { component: FoodSellerDetailComponent, name: 'FoodSellerDetail', segment: 'foodseller/:id' }
      ]
    }),
    SuperTabsModule,
    SharedModule,
    Ionic2RatingModule
  ],
  entryComponents: [
    FoodSellerComponent,
    FoodSellerDetailComponent,
    SellerdetailComponent,
    SellergoodsComponent,
    SellerratingsComponent,
    SellerheaderComponent,
    FooddetailComponent,
    HeaderdetailComponent
  ],
  providers: [
    FoodSellerService,
    FoodSellerDetailService
  ]
})
export class FoodSellerModule { }

