import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from "ionic-angular";
import { CityPickerService } from "../../../../../shared/service/city-data.service";
import { DeliveryService } from "../delivery.service";
import { DeliveryModel } from "../../../../../shared/models/delivery.model";
@Component({
  selector: 'delivery-form',
  templateUrl: 'delivery-form.component.html'
})

export class DeliveryFormComponent implements OnInit {

  cityData: any[]; //城市数据
  // cityName: string = '北京市 北京市 东城区'; //初始化城市名
  // code: string; //城市编码
  delivery: DeliveryModel;
  backupDelivery: DeliveryModel;

  constructor(
    public cityPickerSev: CityPickerService,
    public deliveryService: DeliveryService,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.setCityPickerData();
    this.backupDelivery = this.navParams.data;
  }



  ngOnInit() {
    this.delivery = this.copy(this.backupDelivery);
  }

  //深拷贝
  private copy(source: DeliveryModel): DeliveryModel {
    return <DeliveryModel>JSON.parse(JSON.stringify(source));
  }

  /**
   * 获取城市数据
   */
  setCityPickerData() {
    this.cityPickerSev.getCitiesData()
      .then(data => {
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event) {
    console.log(event);
    // this.code = event['region'].value
  }

  doSubmit() {
    let loading = this.loadingCtrl.create({
      content: '正在提交，请稍后'
    });
    loading.present();
    this.deliveryService.saveDelivery(this.delivery).subscribe((res)=>{
      let result = res.json();
      if (201==res.status) {
        this.navCtrl.pop();
        let toast = this.toastCtrl.create({
            message: result.message,
            duration: 3000,
            position: 'middle',
            cssClass: 'login-toast'
          });
          toast.present();
      }
      loading.dismiss();
    });
  }


}
