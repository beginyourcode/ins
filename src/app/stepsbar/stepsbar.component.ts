import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepsbar',
  templateUrl: './stepsbar.component.html',
  styles: []
})
export class StepsbarComponent implements OnInit {
  isValid:boolean;
  isCompleted:boolean;
  constructor() { }

  ngOnInit() {
  }

  onStep1Next(event){

  }
  onStep2Next(event){

  }
  onStep3Next(event){

  }
  onComplete(event){

  }
}
