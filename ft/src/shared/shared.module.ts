import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CartcontrolComponent } from "./components/cartcontrol/cartcontrol.component";
import { ShopcartComponent } from "./components/shopcart/shopcart.component";
import { ShopcartList } from "./components/shopcart/shopcart-list/shopcart-list";

@NgModule({
  declarations: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList
  ],
  exports: [
    CartcontrolComponent,
    ShopcartComponent,
    ShopcartList,
    IonicModule
  ],
  providers: [

  ]
})
export class SharedModule {
  // static forRoot();
}
