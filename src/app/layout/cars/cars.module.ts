import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';

@NgModule({
    imports: [
        CommonModule,
        CarsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [CarsComponent]
})
export class CarsModule {}
