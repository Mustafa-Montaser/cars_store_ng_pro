import { Component, Input } from '@angular/core';
import { CarSpecs } from 'src/app/interfaces/car-specs';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
    @Input() car!: CarSpecs;
}
