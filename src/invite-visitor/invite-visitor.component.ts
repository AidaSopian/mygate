import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Observable, EventData, fromObject } from "tns-core-modules/data/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";
import { Page } from "tns-core-modules/ui/page";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";

import * as dialogs from "tns-core-modules/ui/dialogs";
require( "nativescript-localstorage" );

class Contact {
    constructor(public name: string){}
}

let usrContact = [
    "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "1010101010", "1122112211", "2233223322", "3344334433", "4455445544", "5566556655", "7788778877", "8899888999", "2200200220"
]  

@Component({
    selector: "InviteVisitor",
    moduleId: module.id,
    templateUrl: "./invite-visitor.component.html",
    styleUrls: ["./invite-visitor.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InviteVisitorComponent implements OnInit {

    name: any;
    tel: any;
    ls:any;

    public contact: Array<Contact> ;

    constructor() {
        this.contact = [];
        for (let i=0; i< usrContact.length; i++){
            this.contact.push(new Contact(usrContact[i]));
        }
    }

    ngOnInit(): void {
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onItemTap(a) {
        console.log("Item Tapped at cell index " + a.index);
        this.tel = usrContact[a.index];
    }

    addVisitor(){
        localStorage.setItem("Telephone Number", this.tel);

        dialogs.alert({
            title: "Contact Invited",
            message: "Message have been sent to the visitor",
            okButtonText: "Done"
        }).then(() => {
            console.log("Dialog closed!");
        });

    }
}
