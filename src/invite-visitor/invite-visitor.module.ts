import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { InviteVisitorRoutingModule } from "./invite-visitor-routing.module";
import { InviteVisitorComponent } from "./invite-visitor.component";

@NgModule({
    imports: [
        NativeScriptModule,
        InviteVisitorRoutingModule
    ],
    declarations: [
        InviteVisitorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InviteVisitorModule { }
