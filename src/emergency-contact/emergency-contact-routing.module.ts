import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EmergencyContactComponent } from "./emergency-contact.component";

const routes: Routes = [
    { path: "", component: EmergencyContactComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EmergencyContactRoutingModule { }
