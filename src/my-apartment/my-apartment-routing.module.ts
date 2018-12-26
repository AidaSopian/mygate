import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MyApartmentComponent } from "./my-apartment.component";

const routes: Routes = [
    { path: "", component: MyApartmentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MyApartmentRoutingModule { }
