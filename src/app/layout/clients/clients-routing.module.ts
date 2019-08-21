import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { DetailClientComponent } from './detail-client/detail-client.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,

    },
    {
        path: 'detailClient/:id',
        component: DetailClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule {}