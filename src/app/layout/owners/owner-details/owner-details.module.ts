import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatInputModule } from '@angular/material';

import { OwnerDetailsRoutingModule } from './owner-details-routing.module';
import { OwnerDetailsComponent } from './owner-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    imports: [
        CommonModule,
        OwnerDetailsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule
        
    ],
    declarations: [OwnerDetailsComponent]
   
})
export class OwnerDetailsModule {}
