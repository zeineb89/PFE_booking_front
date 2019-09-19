import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { HttpClientModule} from '@angular/common/http';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
