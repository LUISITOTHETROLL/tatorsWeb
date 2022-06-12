import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitlerComponent } from './components/hitler/hitler.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';

const routes: Routes = [  {
  path: '',
  redirectTo: 'mainmenu',
  pathMatch: 'full'
},
{
  path: 'hitler', 
  component: HitlerComponent
},
{
  path: 'mainmenu',
  component: MainmenuComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
