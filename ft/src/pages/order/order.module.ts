import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SigninComponent } from "./signin/signin.component";

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    SigninComponent
  ],
  providers: [
  ]
})
export class OrderModule { }
