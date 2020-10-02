import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTrackingComponent } from './pages/new-tracking/new-tracking.component';
import { RegisterComponent } from './pages/register/register.component';
import { TrackingListComponent } from './pages/tracking-list/tracking-list.component';
import { TrackingPageComponent } from './pages/tracking-page/tracking-page.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {
    path: 'nul-admin',
    component: AdminLayoutComponent,
    children: [
     {path: '', redirectTo: 'tracking_list', pathMatch: 'full'},
     {path: 'tracking_list', component: TrackingListComponent},
     {path: 'new_tracking', component: NewTrackingComponent}
     
    ]},
  
  {
    path: '**',
    redirectTo: 'user-login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
