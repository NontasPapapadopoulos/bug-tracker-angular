import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonsGroupComponent } from './components/buttons-group/buttons-group.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { BugListComponent } from './components/bug-list/bug-list.component';
import { BugComponent } from './components/bug/bug.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SummariesComponent } from './components/summaries/summaries.component';
import { BugsService } from './services/bugs.service';
import {NgCircleProgressModule } from   'ng-circle-progress';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBugFormComponent } from './components/create-bug-form/create-bug-form.component';
import { CreateProjectFormComponent } from './components/create-project-form/create-project-form.component';
import { BugDetailsComponent } from './components/bug-details/bug-details.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonsGroupComponent,
    NavbarComponent,
    ProjectComponent,
    ProjectListComponent,
    BugListComponent,
    BugComponent,
    MainContainerComponent,
    FooterComponent,
    SearchBarComponent,
    SummariesComponent,
    CircleProgressBarComponent,
    HomeComponent,
    CreateBugFormComponent,
    CreateProjectFormComponent,
    BugDetailsComponent,
    CommentComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BugsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
