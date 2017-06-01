import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";
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
    public deliveryService: DeliveryService,
    public loadingCtrl: LoadingController
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

  addEditDelivery(delivery?: any) {
    // let formModal = this.modalCtrl.create(DeliveryFormComponent, delivery);
    // formModal.present();
    this.navCtrl.push(DeliveryFormComponent, delivery);
  }

  delDelivery(id: number, index: number) {
    let delLoading = this.loadingCtrl.create({
      content: '正在删除地址信息'
    });
    delLoading.present();
    this.deliveryService.delDelivery(id).subscribe((res) => {
      if (201 == res.status) {
        this.deliveries.splice(index, 1);
        delLoading.dismiss();
      }
    })
  }
}
