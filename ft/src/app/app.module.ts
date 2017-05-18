import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule, Storage } from "@ionic/storage";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { Ionic2RatingModule } from 'ionic2-rating';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { StoreModule } from "@ngrx/store";

import { FoodSellerModule } from "../pages/foodseller/foodseller.module";
import { OrderModule } from "../pages/order/order.module";
import { UserModule } from "../pages/user/user.module";
import { SharedModule } from "../shared/shared.module";
import { authReducer } from "../shared/reducers/auth.reducer";

import { MyApp } from './app.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { TabsComponent } from '../pages/tabs/tabs.component';
import { OrderComponent } from '../pages/order/order.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({ noJwtError: true }), http, options);
}

export function getAuthHttp(http, storage) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'Bearer',
    noJwtError: true,
    globalHeaders: [{ 'Accept': 'application/json' }],
    tokenGetter: (() => storage.get('token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    OrderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FoodSellerModule,
    OrderModule,
    UserModule,
    SharedModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      showBackdrop: true,
      enableBackdropDismiss: true
    }, {
        links: [
          // { component: FoodSellerComponent, name: 'FoodSeller', segment: 'foodseller' },
          // { component: FoodSellerDetailComponent, name: 'FoodSellerDetail', segment: 'foodseller/:id' }
        ]
      }),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    StoreModule.provideStore({
      auth: authReducer
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TabsComponent,
    OrderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, Storage]
    },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
