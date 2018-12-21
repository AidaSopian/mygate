import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { mockedDataArray } from "../mock-dataItems";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Observable, EventData, fromObject } from "tns-core-modules/data/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import { Page } from "tns-core-modules/ui/page";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";

@Component({
    selector: "InviteVisitor",
    moduleId: module.id,
    templateUrl: "./invite-visitor.component.html",
    styleUrls: ["./invite-visitor.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class InviteVisitorComponent implements OnInit {

    public countries: Array<any> = [];

    constructor() {

    }

    ngOnInit(): void {
        for (let index = 0; index < mockedDataArray.length; index++) {
            // creating an object with additional id key to re-use as unique id
            this.countries.push({ "data": mockedDataArray[index], id: index });
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(args: EventData) {
        // using the unique id assigned via the view-model
        console.log(args.object.get("id"));
    }

    onScroll(args: ScrollEventData) {
        console.log("scrollX: " + args.scrollX + "; scrollY: " + args.scrollY);
    }

    onScrollLoaded(args) {
        // scroll to specific position of the horizontal scroll list
        let scrollOffset = 330;
        (<ScrollView>args.object).scrollToHorizontalOffset(scrollOffset, true);
    }
}
