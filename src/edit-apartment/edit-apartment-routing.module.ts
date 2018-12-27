import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EditApartmentComponent } from "./edit-apartment.component";

const routes: Routes = [
    { path: "", component: EditApartmentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EditApartmentRoutingModule { }
