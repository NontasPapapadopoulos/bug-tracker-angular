import { Component, Input, OnInit } from '@angular/core';
import { BugsService } from 'src/app/services/bugs.service';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.css']
})
export class SummariesComponent implements OnInit {
  @Input()
  totalBugs!:number;
  @Input()
  resolved!:number;
  @Input()
  unresolved!:number;
  @Input()
  underTesting!:number;

  constructor(private bugsService: BugsService) {
   
   }

  ngOnInit(): void {
    this.bugsService.getSummaries();
    this.totalBugs = this.bugsService.bugs.length;
    this.resolved=this.bugsService.totalResolved; 
    this.unresolved=this.bugsService.totalUnresolved;
    this.underTesting=this.bugsService.totalUnderTesting;
  }




}
