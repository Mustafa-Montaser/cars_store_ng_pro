import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FormsModule } from '@angular/forms';
import { CarCardComponent } from './components/car-card/car-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        SearchComponent,
        LandingPageComponent,
        NotFoundComponent,
        AllCarsComponent,
        CarDetailsComponent,
        CarCardComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

