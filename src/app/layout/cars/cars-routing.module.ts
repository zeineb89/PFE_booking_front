import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

const routes: Routes = [
    {
        path: '',
        component: CarsComponent
    },
    {
        path: 'newCar',
        component: AddNewCarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarsRoutingModule {}