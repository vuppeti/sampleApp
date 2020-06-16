import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent} from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { AuthGuard } from './user/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { CovidComponent } from './covid/covid.component';
import { ChartsComponent } from './charts/charts.component';
import { MapChartsComponent } from './map-charts/map-charts.component';

const routes: Route [] = [
  {path:  'viewProfile/:id' , component: ViewProfileComponent},
  {path:  'app' , component: AppComponent},
  {path: 'profiles' , component:ProfilesComponent},
  {path: '' , component:SigninComponent , data: {breadcrumb:'Covid'},},
  {path: 'home' , component:HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'usertable', component: UserTableComponent, canActivate: [AuthGuard]},
  {path: 'update', component: EditProfileComponent},
  {path: 'uploadfile', component: UploadFileComponent},
  {
    path: 'covid', 
    component: CovidComponent ,
    data: {
      breadcrumb:'Covid'
    },
    children: [
      {
        path: 'charts', 
        component: ChartsComponent,
        data: {
          breadcrumb:'Charts'
        },
      },
      {
        path: 'mapcharts', 
        component: MapChartsComponent,
        data: {
          breadcrumb:'Maps'
        },
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
