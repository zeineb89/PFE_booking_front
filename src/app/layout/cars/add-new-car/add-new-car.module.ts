import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatPaginatorModule, MatInputModule, MatDialogModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {CdkStepperModule} from '@angular/cdk/stepper'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNewCarComponent } from './add-new-car.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDialogModule,
        CdkStepperModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [AddNewCarComponent],
})
export class AddNewCarModule {}
