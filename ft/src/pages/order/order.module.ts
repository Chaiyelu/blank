import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from "../../shared/shared.module";

import { SigninComponent } from "./signin/signin.component";
import { OrderHomeComponent } from "./order-home/order-home.component";

import { OrderNavComponent } from "./order-home/order-nav/order-nav.component";

@NgModule({
  declarations: [
    SigninComponent,
    OrderHomeComponent,
    OrderNavComponent
  ],
  imports: [
    IonicModule,
    SharedModule
  ],
  entryComponents: [
    SigninComponent,
    OrderHomeComponent,
    OrderNavComponent
  ],
  exports: [

  ],
  providers: [
  ]
})
export class OrderModule { }
