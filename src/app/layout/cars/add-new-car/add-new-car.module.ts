import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatPaginatorModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input'; 
import { AgmCoreModule } from '@agm/core'
import {MatCheckboxModule} from '@angular/material/checkbox';

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
        ReactiveFormsModule,
        AgmCoreModule,
        MatSelectModule,
        MatCheckboxModule

        
    ],
    declarations: [AddNewCarComponent],
})
export class AddNewCarModule {}
