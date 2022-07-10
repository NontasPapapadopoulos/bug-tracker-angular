import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { BugsService } from 'src/app/services/bugs.service';
import {Bug} from '../../models/Bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {

  @Input()
  bug!:Bug;
  color!: string;
 
  constructor(private bugsService: BugsService) {
   }

  ngOnInit(): void {
    this.bugStatusColor();
 }

  bugStatusColor():void {
    if(this.bug.bugStatus === 'resolved') {
      this.color= 'green';
    } else if (this.bug.bugStatus === 'under testing') {
      this.color='yellow'; 
    } else {
      this.color='red';
    }
  }

}
