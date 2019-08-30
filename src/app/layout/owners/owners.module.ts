import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatCardModule } from '@angular/material';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { OwnerDetailsModule } from './owner-details/owner-details.module';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

@NgModule({
    imports: [
        CommonModule,
        OwnersRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatCardModule,
        OwnerDetailsModule
    ],
    declarations: [OwnersComponent, OwnerDetailsComponent]
   
})
export class OwnersModule {}
