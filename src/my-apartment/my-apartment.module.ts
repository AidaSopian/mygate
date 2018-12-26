import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { MyApartmentRoutingModule } from "./my-apartment-routing.module";
import { MyApartmentComponent } from "./my-apartment.component";

@NgModule({
    imports: [
        NativeScriptModule,
        MyApartmentRoutingModule
    ],
    declarations: [
        MyApartmentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyApartmentModule { }
