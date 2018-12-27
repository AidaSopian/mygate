import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { EditApartmentRoutingModule } from "./edit-apartment-routing.module";
import { EditApartmentComponent } from "./edit-apartment.component";

@NgModule({
    imports: [
        NativeScriptModule,
        EditApartmentRoutingModule
    ],
    declarations: [
        EditApartmentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditApartmentModule { }
