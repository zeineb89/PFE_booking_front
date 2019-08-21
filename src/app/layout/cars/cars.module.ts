import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { 
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule, 
    MatDialogModule,
    MatCardModule, 
    MatIconModule, 
    MatTableModule,
    MatStepperModule, 
    MatButtonModule, 
    MatAutocompleteModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarDialogComponent } from './car-dialog/car-dialog.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

@NgModule({
    imports: [
        CommonModule,
        CarsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDialogModule,
        MatStepperModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule
        
    ],
    declarations: [CarsComponent, CarDialogComponent, AddNewCarComponent],
    entryComponents: [
        CarDialogComponent,
    ]
})
export class CarsModule {}
