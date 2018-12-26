import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { VisitorsRoutingModule } from "./visitors-routing.module";
import { VisitorsComponent } from "./visitors.component";

@NgModule({
    imports: [
        NativeScriptModule,
        VisitorsRoutingModule
    ],
    declarations: [
        VisitorsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VisitorsModule { }
