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
    MatAutocompleteModule,
    MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarDialogComponent } from './car-dialog/car-dialog.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { AgmCoreModule } from '@agm/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FileSelectDirective } from 'ng2-file-upload';

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
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBb5tCDKER-ge6RLFv64gbTbMq09hK-YXw'
          }),
        MatSelectModule,
        MatCheckboxModule
    ],
    declarations: [CarsComponent, CarDialogComponent, AddNewCarComponent,FileSelectDirective],
    entryComponents: [
        CarDialogComponent,
    ]
})
export class CarsModule {}
