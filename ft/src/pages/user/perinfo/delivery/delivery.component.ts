import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { DeliveryService } from "./delivery.service";
import { DeliveryModel } from "../../../../shared/models/delivery.model";
import { DeliveryFormComponent } from "../delivery/delivery-form/delivery-form.component";

@Component({
  selector: 'delivery',
  templateUrl: 'delivery.component.html'
})

export class DeliveryComponent implements OnInit {
  deliveries: DeliveryModel[];
  constructor(
    public navCtrl: NavController,
    public deliveryService: DeliveryService
  ) {
    // this.deliveryService.getDeliveryByUserId().subscribe((result) => {
    //   console.log(result);
    //   this.deliveries = result;
    // });
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.deliveryService.getDeliveryByUserId().subscribe((result) => {
      console.log(result);
      this.deliveries = result;
    });
  }

  addEditDelivery(delivery?:any) {
    // let formModal = this.modalCtrl.create(DeliveryFormComponent, delivery);
    // formModal.present();
    this.navCtrl.push(DeliveryFormComponent, delivery);
  }
}
