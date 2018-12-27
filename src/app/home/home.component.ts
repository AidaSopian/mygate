import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.css"],
})
export class HomeComponent implements OnInit {

    constructor(private page:Page, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    //routing code T-T
    onTapInviteVisitor(){
        this.router.navigate(["/invite-visitor"]);
    }

    onTapVisitors(){
        this.router.navigate(["/visitor"]);
    }

    onTapMyApartment(){
        this.router.navigate(["/my-apartment"]);
    }
    //routing ends here
}
