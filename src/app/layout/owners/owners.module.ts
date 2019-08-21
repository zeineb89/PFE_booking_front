import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatCardModule } from '@angular/material';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

@NgModule({
    imports: [
        CommonModule,
        OwnersRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: [OwnersComponent, OwnerDetailsComponent]
   
})
export class OwnersModule {}
