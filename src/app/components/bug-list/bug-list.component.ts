import { Component, Input, OnInit } from '@angular/core';
import { Bug } from 'src/app/models/Bug';
import { BugsService } from 'src/app/services/bugs.service';
import { BugComponent } from '../bug/bug.component';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  
  @Input()
  bugs!: Bug[];

  constructor(private bugsService: BugsService) { 
  }

  ngOnInit(): void {
       this.bugs = this.bugsService.getBugs();
      
  }

}
