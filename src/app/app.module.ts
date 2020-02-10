import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './_components/article/article.component';
import { AppHomeComponent } from './_components/app-home/app-home.component';
import { AppNavComponent } from './_components/app-nav/app-nav.component';
import { ContactComponent } from './_components/contact/contact.component';
import { ResumeComponent } from './_components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AppHomeComponent,
    AppNavComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
