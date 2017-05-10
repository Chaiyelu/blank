import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import { FoodSellerDetailService } from "../foodsellerdetail.service";
import { FoodModel } from "../../../../shared/models/food.model";

@Component({
  selector: 'fooddetail',
  templateUrl: 'fooddetail.component.html'
})

export class FooddetailComponent implements OnInit, AfterViewChecked {

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

  ngAfterViewChecked(){
    //this.foodSellerDetailService.doChoose.emit();
  }

  onAddFirst() {
    this.food.count = 1;
    this.chooseFoods();
  }

  chooseFoods() {
    this.foodSellerDetailService.doChoose.emit();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
