import { Component } from '@angular/core';
import { CarSpecs } from 'src/app/interfaces/car-specs';
import { CarsService } from 'src/app/services/cars.service';

@Component({
    selector: 'app-all-cars',
    templateUrl: './all-cars.component.html',
    styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent {
    constructor(private carsService: CarsService) {
        this.carsService.getAllCars().subscribe({
            next: (res) => {
                this.allCarsList = res;  
                this.allCarsList.forEach(carItem => carItem.image = this.carsService.getFakeCarImg());              
            }
        });
    }

    allCarsList: CarSpecs[] = [];

    currentPage: number = 1;
}
