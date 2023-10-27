import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { Routes, RouterModule } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [{
  path: '',  //default component to display
  component: ListStudentsComponent
}, {
  path: 'addStudent',  //when students added 
  component: NewStudentFormComponent
}, {
  path: 'editStudent/:_id', //when students edited 
  component: NewStudentFormComponent
}, {
  path: 'listStudents',  //when students listed
  component: ListStudentsComponent
}, {
  path: '**',  //when path cannot be found
  component: NotFoundComponent
}
];



@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent,
    NavigationMenuComponent,
    ListStudentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
