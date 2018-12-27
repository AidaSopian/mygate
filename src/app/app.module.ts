import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";

//page component 
import { AppComponent } from "./app.component";
import { LoginComponent } from "~/login/login.component";
import { RegisterComponent } from "~/register/register.component";
import { InviteVisitorComponent } from "~/invite-visitor/invite-visitor.component";
import { VisitorsComponent } from "~/visitors/visitors.component";
import { MyApartmentComponent } from "~/my-apartment/my-apartment.component";
import { ProfileComponent } from "~/profile/profile.component";

//added module
import { HttpService } from "~/http/http.service";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule, } from "nativescript-angular/forms";


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
        HttpClientModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        InviteVisitorComponent,
        VisitorsComponent,
        MyApartmentComponent,
        ProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
