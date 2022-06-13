import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HitlerComponent } from './components/hitler/hitler.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { KimComponent } from './components/kim/kim.component';

@NgModule({
  declarations: [
    AppComponent,
    HitlerComponent,
    MainmenuComponent,
    KimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
