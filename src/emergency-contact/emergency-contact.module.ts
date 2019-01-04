import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { EmergencyContactRoutingModule } from "./emergency-contact-routing.module";
import { EmergencyContactComponent } from "./emergency-contact.component";

@NgModule({
    imports: [
        NativeScriptModule,
        EmergencyContactRoutingModule
    ],
    declarations: [
        EmergencyContactComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmergencyContactModule { }
