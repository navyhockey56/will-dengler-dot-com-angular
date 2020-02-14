import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './_components/app-home/app-home.component'
import { ContactComponent } from './_components/contact/contact.component'
import { ResumeComponent } from './_components/resume/resume.component'
import { MessagesComponent } from './_components/messages/messages.component'

import { AwkwardMathComponent } from './_components/_side-projects/awkward-math/awkward-math.component'
import { EmeraldComponent } from './_components/_side-projects/emerald/emerald.component'
import { RainyGemserverComponent } from './_components/_side-projects/rainy-gemserver/rainy-gemserver.component'
import { SideTexterComponent } from './_components/_side-projects/side-texter/side-texter.component'

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ResumeComponent },
  { path: 'messages', component: MessagesComponent },

  { path: 'side-projects/awkward-math', component: AwkwardMathComponent },
  { path: 'side-projects/emerald-language', component: EmeraldComponent },
  { path: 'side-projects/rainy-gemserver', component: RainyGemserverComponent },
  { path: 'side-projects/side-texter', component: SideTexterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
