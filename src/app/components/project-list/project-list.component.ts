import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
