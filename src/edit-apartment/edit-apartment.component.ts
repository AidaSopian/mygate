import { Component, OnInit } from "@angular/core";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "edit-apartment", loadChildren: "./edit-apartment/edit-apartment.module#EditApartmentModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "EditApartment",
    moduleId: module.id,
    templateUrl: "./edit-apartment.component.html"
})
export class EditApartmentComponent implements OnInit {
    name: any;
    block: any;
    level: any;
    aprtnum: any;

    constructor() {
        this.name = "Apartment";
        this.block = "A";
        this.level = "12";
        this.aprtnum = "1201";
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}
