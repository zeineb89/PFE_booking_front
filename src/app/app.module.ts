import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { JwtInterceptor } from './login/jwt.interceptor';
import { ErrorInterceptor } from './login/error.interceptor';


import { AgmCoreModule } from '@agm/core';


import {MatCheckboxModule} from '@angular/material/checkbox';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
        '.json'
    );*/
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule, ToastrModule.forRoot(),
        OverlayModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBb5tCDKER-ge6RLFv64gbTbMq09hK-YXw'
          }),
        MatCheckboxModule,
               
        
    ],
    providers: [{provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
        {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}],
    bootstrap: [AppComponent]
})
export class AppModule {}
