import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        ClientsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule
    ],
    declarations: [ClientsComponent]
})
export class ClientsModule {}
