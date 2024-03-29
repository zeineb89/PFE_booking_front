import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnersComponent } from './owners.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

const routes: Routes = [
    {
        path: '',
        component: OwnersComponent
    },
    {
        path: 'detailOwner/:id',
        component: OwnerDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OwnersRoutingModule {}