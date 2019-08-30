import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';


import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { DetailClientModule } from './detail-client/detail-client.module';
import { DetailClientComponent } from './detail-client/detail-client.component';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        ClientsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        DetailClientModule
        
    ],
    declarations: [ClientsComponent, DetailClientComponent]
})
export class ClientsModule {}
