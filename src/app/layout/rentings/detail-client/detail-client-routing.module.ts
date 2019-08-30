import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailClientComponent } from './detail-client.component';

const routes: Routes = [
    {
        path: '',
        component: DetailClientComponent,

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailClientRoutingModule {}