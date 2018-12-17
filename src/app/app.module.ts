import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "~/login/login.component";
import { RegisterComponent } from "~/register/register.component";
import { HttpService } from "~/http/http.service";

import { HttpClientModule } from "@angular/common/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    providers: [
        HttpService
    ],

    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
