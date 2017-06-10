import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mt-step',
	templateUrl: 'step.component.html'
})

export class StepComponent implements OnInit {
  @Input() stepArr: any[];
  @Input() currentStep: number = 1;
	ngOnInit() { }
}
