import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarSpecs } from '../interfaces/car-specs';

@Injectable({
    providedIn: 'root'
})
export class CarsService {
    constructor(private httpClient: HttpClient) { }

    private carsAPI: string = "https://freetestapi.com/api/v1/cars";

    getAllCars(): Observable<CarSpecs[]> {
        return this.httpClient.get<CarSpecs[]>(this.carsAPI);
    }

    getLimitCars(carsNum: number): Observable<CarSpecs[]> {
        return this.httpClient.get<CarSpecs[]>(`${this.carsAPI}`, {
            params: {
                limit: carsNum
            }
        });
    }

    getQueryCar(query: string): Observable<CarSpecs[]> {
        return this.httpClient.get<CarSpecs[]>(`${this.carsAPI}`, {
            params: {
                search: query
            }
        });
    }

    getSingleCar(id: number): Observable<CarSpecs[]> {
        return this.httpClient.get<CarSpecs[]>(`${this.carsAPI}/${id}`);
    }

    private fakeCarsImgs: string[] = [
        "assets/images/Audi 1.png",
        "assets/images/image 11.png",
        "assets/images/image 12.png",
        "assets/images/image 13.png",
    ];
    
    getFakeCarImg(): string {
        return this.fakeCarsImgs[Math.floor(Math.random() * 4)];
    };
}
