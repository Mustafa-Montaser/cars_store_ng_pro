import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { CarsService } from 'src/app/services/cars.service';
import { CarSpecs } from 'src/app/interfaces/car-specs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    constructor(public landing: LandingPageComponent, private carsService: CarsService) {}

    query: string = "";
    queryResult: CarSpecs[] = [];

    searchForCar(): void {
        this.carsService.getQueryCar(this.query).subscribe({
            next: (res) => {
                this.queryResult = res;
                this.queryResult.forEach(carItem => carItem.image = this.carsService.getFakeCarImg());
            }
        });
    }
}
