import { Component } from '@angular/core';
import { CarSpecs } from 'src/app/interfaces/car-specs';
import { CarsService } from 'src/app/services/cars.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
    constructor(private carsService: CarsService) {
        this.carsService.getLimitCars(this.requiredCars).subscribe({
            next: (res) => {
                this.carsList = res;
                this.carsList.forEach(carItem => carItem.image = this.carsService.getFakeCarImg());
            }
        });
    }

    private requiredCars: number = 4;

    carsList: CarSpecs[] = [];
}
