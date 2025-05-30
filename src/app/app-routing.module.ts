import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentsComponent } from './Pages/students/students.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, title: 'HomePage'},
  {path: 'about-us', component: AboutPageComponent, title: 'About Page'},
  {path: 'contact-us', component: ContactPageComponent, title: 'Contact us'},
  {path: 'students', component: StudentsComponent, title: 'Students'},
  {path: 'students/create', component: StudentCreateComponent, title: 'Create Student'},
  {path: 'students/edit/:id', component: StudentEditComponent, title: 'Edit Student'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
