import { Component, OnInit, OnChanges, SimpleChanges ,Input, Output, EventEmitter } from '@angular/core';
import { FoodModel } from "../../models/food.model";
import { moveIn, roll } from './carcontrol.animations';

@Component({
  selector: 'mt-cartcontrol',
  templateUrl: 'cartcontrol.component.html',
  animations: [moveIn, roll]
})

export class CartcontrolComponent implements OnInit {
  @Input() food: FoodModel;
  @Output() selectFoodsEmit = new EventEmitter();

  private isRoll: string;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (this.food.count > 0) {
        this.isRoll = 'active';
      } else {
        this.isRoll = 'inactive';
      }
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
    this.selectFoodsEmit.emit();
    console.log(this.food);
  }

  decreaseCart() {
    event.stopPropagation();
    if (this.food.count) {
      this.food.count--;
    }
    this.selectFoodsEmit.emit();
  }



}
