import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
@Component({
  selector: 'mt-ratingselect',
  templateUrl: 'ratingselect.component.html'
})

export class RatingselectComponent implements OnInit, OnChanges {
  @Input() selectType: number = ALL;
  @Input() onlyContent: boolean;
  @Input() desc: object = { all: '全部', positive: '满意', negative: '不满意' };
  @Output() typeSelect = new EventEmitter();
  @Output() contentToggle = new EventEmitter();

  constructor() {
    this.onlyContent = false;
  }

  ngOnChanges() {

  }

  ngOnInit() {
  }

  select(type: number) {
    this.selectType = type;
    this.typeSelect.emit(type);
  }

  toggleContent() {
    this.onlyContent = !this.onlyContent;
    this.contentToggle.emit(this.onlyContent);
  }

}
