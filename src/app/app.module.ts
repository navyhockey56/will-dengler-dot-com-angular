import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './_components/article/article.component';
import { AppHomeComponent } from './_components/app-home/app-home.component';
import { AppNavComponent } from './_components/app-nav/app-nav.component';
import { ContactComponent } from './_components/contact/contact.component';
import { ResumeComponent } from './_components/resume/resume.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { AwkwardMathComponent } from './_components/_side-projects/awkward-math/awkward-math.component';
import { SideTexterComponent } from './_components/_side-projects/side-texter/side-texter.component';
import { RainyGemserverComponent } from './_components/_side-projects/rainy-gemserver/rainy-gemserver.component';
import { EmeraldComponent } from './_components/_side-projects/emerald/emerald.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AppHomeComponent,
    AppNavComponent,
    ContactComponent,
    ResumeComponent,
    MessagesComponent,
    AwkwardMathComponent,
    SideTexterComponent,
    RainyGemserverComponent,
    EmeraldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
