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
import { RentingsComponent } from './rentings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RentingsRoutingModule } from './rentings-routing.module';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { CarDialogComponent } from './car-dialog/car-dialog.component';

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
        MatStepperModule,
        RentingsRoutingModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBb5tCDKER-ge6RLFv64gbTbMq09hK-YXw'
          }),
        MatSelectModule,
        MatCheckboxModule,
        
        
    ],
    declarations: [RentingsComponent, DetailClientComponent, OwnerDetailsComponent, CarDialogComponent],
    entryComponents: [ CarDialogComponent
    ]
})
export class RentingsModule {}
