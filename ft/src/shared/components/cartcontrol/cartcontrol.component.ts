import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FoodModel } from "../../models/food.model";
import { moveIn, roll } from './carcontrol.animations';
import { FoodSellerDetailService } from "../../../pages/foodseller/foodsellerdetail/foodsellerdetail.service";

@Component({
  selector: 'mt-cartcontrol',
  templateUrl: 'cartcontrol.component.html',
  animations: [moveIn, roll]
})

export class CartcontrolComponent implements OnInit {
  @Input() food: FoodModel;
  //@Output() chooseFoodsEmit = new EventEmitter();

  private isRoll: string;

  constructor(
    public foodSellerDetailService: FoodSellerDetailService
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.food.count > 0) {
      this.isRoll = 'active';
    } else {
      this.isRoll = 'inactive';
    }
  }

  ngOnInit() {
    //console.log(this.food);
  }

  addCart() {
    event.stopPropagation();
    if (!this.food.count) {
      this.food.count = 1;
    } else {
      this.food.count++;
    }
    // this.chooseFoodsEmit.emit();
    this.foodSellerDetailService.doChoose.emit();
    // console.log(this.food);
  }

  decreaseCart() {
    event.stopPropagation();
    if (this.food.count) {
      this.food.count--;
    }
    this.foodSellerDetailService.doChoose.emit();
  }



}
