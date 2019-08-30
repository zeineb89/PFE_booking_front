import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { DetailClientRoutingModule } from './detail-client-routing.module';
import { DetailClientComponent } from './detail-client.component';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        DetailClientRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        
        
    ],
    declarations: []
})
export class DetailClientModule {}
