import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AllCarsComponent } from './components/all-cars/all-cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';


const routes: Routes = [
    { 
        path: "",
        redirectTo: "home",
        pathMatch: "full" 
    },
    { 
        path: "home", 
        component: LandingPageComponent, 
        title: "Cars - Home" 
    },
    { 
        path: "all-cars", 
        component: AllCarsComponent, 
        title: "Cars - All Cars" 
    },
    { 
        path: "car/:id", 
        component: CarDetailsComponent, 
        title: "Cars - Car Details" 
    },
    { 
        path: "**", 
        component: NotFoundComponent, 
        title: "NotFound" 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
