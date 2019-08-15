import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';

@NgModule({
    imports: [
        CommonModule,
        OwnersRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [OwnersComponent]
})
export class OwnersModule {}
