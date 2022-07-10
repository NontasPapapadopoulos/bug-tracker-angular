import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  project: Project;

  constructor(private projectsService: ProjectsService) {
    this.project = {
      projectDate : new Date ('11/11/2011'),
      projectId : 2, 
      projectName : 'bug Tracker', 
      projectDescription: 'hahaa'
    }
   }

  ngOnInit(): void {
    this.projectsService.getProjects();
  }

}
