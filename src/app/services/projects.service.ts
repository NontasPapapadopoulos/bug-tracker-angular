import { Injectable } from '@angular/core';
import { Project } from '../models/Project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }


  getProjects(): Project[] {
  console.log('projects from service');
  return [];
}

}


