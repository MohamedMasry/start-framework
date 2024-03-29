import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'', component:HomeComponent, title:"Home"},
  {path:'about', component:AboutComponent, title:"About"},
  {path:'portfolio', component:PortfolioComponent, title:"Portfolio"},
  {path:'contact', component:ContactComponent, title:"Contact us"},
  {path:"**", component:NotfoundComponent, title:"404 - Not found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
