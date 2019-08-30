import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentingsComponent } from './rentings.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
const routes: Routes = [
    {
        path: '',
        component: RentingsComponent
    },
    {
        path: 'client/:id',
        component: DetailClientComponent
    },
    {
        path: 'owner/:id',
        component: OwnerDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RentingsRoutingModule {}