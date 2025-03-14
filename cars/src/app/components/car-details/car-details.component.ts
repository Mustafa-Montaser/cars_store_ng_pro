import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarSpecs } from 'src/app/interfaces/car-specs';
import { CarsService } from 'src/app/services/cars.service';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService) {}

    ngOnInit(): void {
        this.carsService.getSingleCar(this.activatedRoute.snapshot.params['id']).subscribe({
            next: (res) => {
                this.carDetails = res;
            }
        });
    }

    // carDetails = new CarSpecs();

    carDetails: CarSpecs[] = [];

    // carDetails: CarSpecs = {
    //     color: "string",
    //     engine: "string",
    //     features: [],
    //     fuelType: "string",
    //     horsepower: Number(),
    //     id: Number(),
    //     image: "string",
    //     make: "string",
    //     mileage: Number(),
    //     model: "string",
    //     owners: Number(),
    //     price: Number(),
    //     transmission: "string",
    //     year: Number(),
    // };
}
