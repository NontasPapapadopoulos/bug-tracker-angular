import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.css']
})
export class CircleProgressBarComponent implements OnInit {

  @Input()
  progress!:number;
  @Input()
  total!:number; 
  @Input()
  number!:number;
  @Input()
  color!:string;

  constructor() {
    this.progress = this.total / this.number;

    
   }


  ngOnInit(): void {
  }






}
