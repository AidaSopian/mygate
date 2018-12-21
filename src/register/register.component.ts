import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "~/http/http.service";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "register", loadChildren: "./register/register.module#RegisterModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
    _url = "auth/signup";
    name: string;
    email: string;
    password: string;
    confmPass: string;

    constructor(private http: HttpService, public router: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSignupButtonTap(): void {
        let requestBody = new FormData();
        requestBody.append("username", this.name);
        requestBody.append("email", this.email);
        requestBody.append("password", this.password);
        requestBody.append("password_confirmation", this.confmPass);

        console.log(requestBody);
        this.http.posthttp(this._url, requestBody).then((data: any) => {
            this.router.navigate(["/login"]);
        });
        this.router.navigate(["/login"]);
    }
}
