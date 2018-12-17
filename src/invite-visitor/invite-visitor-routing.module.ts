import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InviteVisitorComponent } from "./invite-visitor.component";

const routes: Routes = [
    { path: "", component: InviteVisitorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InviteVisitorRoutingModule { }
