import { Component, OnInit, OnChanges, AfterViewChecked, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ModalController, Content } from 'ionic-angular';
import { fade, fold } from "./shopcart.animations";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import { FoodSellerDetailService } from "../../../pages/foodseller/foodsellerdetail/foodsellerdetail.service";

@Component({
  selector: 'mt-shopcart',
  templateUrl: 'shopcart.component.html',
  animations: [fade, fold]
})

export class ShopcartComponent implements OnInit, OnChanges, AfterViewChecked {
  choosedFoods: any = [];
  // choosedFoods:Observable<any>;
  @Input() deliveryPrice: number;
  @Input() minPrice: number;
  @Output() chooseFoodsEmit = new EventEmitter();
  @ViewChild('listcontent') listContent: ElementRef;
  @ViewChild(Content) content: Content;

  private payStateText: String;
  private payStateClass: String;
  private ttPrice: number;
  private ttCount: number;
  private isFold: boolean;
  private status: string = 'off';
  private ischoosedFoodsChange: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    public renderer: Renderer2,
    public store$: Store<any>,
    public foodSellerDetailService: FoodSellerDetailService
  ) {
    this.isFold = true;
    this.store$.select('choosedFoods').subscribe((choosedFoods) => {
      this.choosedFoods = choosedFoods;
      this.ttPrice = this.totalPrice();
      this.ttCount = this.totalCount();
      this.payState();
      this.ischoosedFoodsChange = true;
      console.log('choosedFoods is change');
    });
  }

  ngOnChanges() {
    this.ttPrice = this.totalPrice();
    this.ttCount = this.totalCount();
    this.payState();
    this.ischoosedFoodsChange = true;
  }

  ngOnInit() {
    console.log(this.choosedFoods);
  }

  ngAfterViewChecked() {
    if (this.ischoosedFoodsChange) {
      this._setContentHeight();
      this.ischoosedFoodsChange = false;
    }
  }

  totalPrice() {
    let total = 0;
    this.choosedFoods.forEach((food) => {
      total += food.price * food.count;
    });
    return total;
  }

  totalCount() {
    let count = 0;
    this.choosedFoods.forEach((food) => {
      count += food.count;
    })
    return count;
  }

  payState() {
    if (this.totalPrice() === 0) {
      this.payStateText = `￥${this.minPrice}元起送`;
      this.payStateClass = 'not-enough';
    } else if (this.totalPrice() < this.minPrice) {
      let diff = this.minPrice - this.totalPrice();
      this.payStateText = `还差￥${diff}元起送`;
      this.payStateClass = 'not-enough';
    } else {
      this.payStateText = '去结算';
      this.payStateClass = 'enough';
    }
  }

  listShow() {
    if (!this.totalCount()) {
      this.isFold = true;
      return "off";
    }
    let show = (!this.isFold) ? 'on' : 'off';
    return show;
  }

  toggleList() {
    if (!this.totalCount()) {
      return;
    }
    this.isFold = !this.isFold;
    this.status = this.listShow();
    console.log(this.choosedFoods);
  }

  empty() {
    this.store$.dispatch({type:'EMPTY'});
    this.status = this.listShow();
    // this.choosedFoods.forEach((food) => {
    //   food.count = 0;
    // });
    // this.status = this.listShow();
    // this.ttPrice = this.totalPrice();
    // this.ttCount = this.totalCount();
    // this.payState();
    this.foodSellerDetailService.doChoose.emit();
  }

  hideList() {
    this.isFold = true;
    this.status = this.listShow();
  }

  pay() {
    event.stopPropagation();
    if (this.totalPrice() < this.minPrice) {
      return;
    }
    window.alert(`去支付${this.ttPrice}`);
  }

  _setContentHeight() {

    let h = this.listContent.nativeElement.clientHeight;
    h = h > 217 ? 217 : h;
    //this.content._elementRef.nativeElement.style.height = h+'px';
    this.renderer.setStyle(this.content._elementRef.nativeElement, 'height', h + 'px');
  }
}


