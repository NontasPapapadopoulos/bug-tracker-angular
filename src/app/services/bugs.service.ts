import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bug } from '../models/Bug';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  bugs!: Bug[];
  bug!: Observable<any>;
  totalUnresolved = 0;
  totalResolved = 0; 
  totalUnderTesting =0;
  
  constructor() { 
    this.bugs=[ {
          bugName:'bug1',
          bugDate: new Date ('23/03/1999'),
          bugId: 3, 
          bugStatus: 'unresolved' ,
          bugDescription: 'dummy', 
          projectId: 1, 
          userId : 2
        }, 
      {
          bugName:'bug2',
          bugDate: new Date ('23/03/1999'),
          bugId: 3, 
          bugStatus: 'unresolved' ,
          bugDescription: 'dummy', 
          projectId: 1, 
          userId : 2
        }, {
          bugName:'bug3',
          bugDate: new Date ('23/03/1999'),
          bugId: 3, 
          bugStatus: 'under testing' ,
          bugDescription: 'dummy', 
          projectId: 1, 
          userId : 2
        }, {
          bugName:'bug333',
          bugDate: new Date ('23/03/1999'),
          bugId: 3, 
          bugStatus: 'under testing' ,
          bugDescription: 'dummy', 
          projectId: 1, 
          userId : 2
        },
        {
          bugName:'bug333',
          bugDate: new Date ('23/03/1999'),
          bugId: 3, 
          bugStatus: 'resolved' ,
          bugDescription: 'dummy', 
          projectId: 1, 
          userId : 2
        }
      ]
    }



  getBugs() : Bug[] {
    console.log('bugs from service');
    return this.bugs;
  }

  getSummaries() {
    this.bugs.forEach(bug => {
      if(bug.bugStatus === 'unresolved') {
        this.totalUnresolved++;
      } else if (bug.bugStatus === 'resolved') {
         this.totalResolved ++;
      } else if (bug.bugStatus === 'under testing') {
         this.totalUnderTesting ++;
      }
      
    });
  }

}
