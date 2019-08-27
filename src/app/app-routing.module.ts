import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// IMPORT COMPONENTS TO ROUTE
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ServicesComponent } from "./services/services.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// URL PATHS TO THE DIFFERENT COMPONENTS 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: PageNotFoundComponent },
  // import dashboard routing plus children
  { 
    path: 'companies', 
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: {preload: true}
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
