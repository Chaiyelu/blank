import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CartcontrolComponent } from "./components/cartcontrol/cartcontrol.component";


@NgModule({
  declarations: [
    CartcontrolComponent
  ],
  imports: [
    IonicModule
  ],
  // entryComponents: [
  //   CartcontrolComponent
  // ],
  exports: [
    CartcontrolComponent,
    IonicModule
  ],
  providers: [

  ]
})
export class SharedModule {
  // static forRoot();
}
