import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './_components/app-home/app-home.component'
import { ContactComponent } from './_components/contact/contact.component'
import { ResumeComponent } from './_components/resume/resume.component'

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
