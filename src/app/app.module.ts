import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { DedProfileService} from './ded-profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from './home/home.component';
import { SearchService } from './search.service';
import { FilterPipe } from './filter.pipe';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { AuthenticationService } from './user/authentication.service';
import {UserRequestInterceptor} from './user/user.request.interceptor';
import { AuthGuard } from './user/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {BreadcrumbModule} from 'angular-crumbs';

import { FusionChartsModule } from "angular-fusioncharts";
import * as Maps from 'fusioncharts/fusioncharts.maps';
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import * as India from 'fusioncharts/maps/fusioncharts.india';

import { CovidComponent } from './covid/covid.component';
import { ChartsComponent } from './charts/charts.component';
import { MapChartsComponent } from './map-charts/map-charts.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts,Maps,India, FusionTheme);



@NgModule({
  declarations: [
    AppComponent,
    ViewProfileComponent,
    ProfilesComponent,
    HomeComponent,
    FilterPipe,
    SignupComponent,
    SigninComponent,
    UserTableComponent,
    EditProfileComponent,
    UploadFileComponent,
    CovidComponent,
    ChartsComponent,
    MapChartsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FusionChartsModule,
    BreadcrumbModule
    
  ],
  providers: [ApiService , DedProfileService , SearchService , AuthenticationService , UserRequestInterceptor , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
