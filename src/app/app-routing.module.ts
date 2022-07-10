import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BugDetailsComponent } from './components/bug-details/bug-details.component';
import { CreateBugFormComponent } from './components/create-bug-form/create-bug-form.component';
import { CreateProjectFormComponent } from './components/create-project-form/create-project-form.component';
import { HomeComponent } from './components/home/home.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-bug', component: CreateBugFormComponent},
  {path: 'create-project', component: CreateProjectFormComponent},
  {path: 'bug-details', component: BugDetailsComponent}
]; //bug-details/:id

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
