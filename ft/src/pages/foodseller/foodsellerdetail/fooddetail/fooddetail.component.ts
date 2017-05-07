import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { FoodSellerDetailService } from "../foodsellerdetail.service";
import { FoodModel } from "../../../../shared/models/food.model";

@Component({
  selector: 'fooddetail',
  templateUrl: 'fooddetail.component.html'
})

export class FooddetailComponent implements OnInit {

  food: FoodModel;
  choosedFoods: any[] = [];
  constructor(
    public viewCtrl: ViewController,
    public foodSellerDetailService: FoodSellerDetailService,
    public navParams: NavParams
  ) {
    this.food = this.navParams.get('food');
    this.choosedFoods = this.navParams.get('choosedFoods');
    this.foodSellerDetailService.doChoose1.subscribe(foods => {
      this.choosedFoods = foods;
    });
  }

  ngOnInit() {

  }

  onAddFirst() {
    this.food.count = 1;
    this.chooseFoods();
  }

  chooseFoods() {
    this.foodSellerDetailService.doChoose.emit();

    // console.log(this.choosedFoods);
    // for (var i = 0; i < this.choosedFoods.length; i++) {
    //   if (this.choosedFoods[i].count == 0) {
    //     this.choosedFoods.splice(i, 1);
    //     break;
    //   }
    // }
  }

  dismiss() {
    // let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();
  }
}
