import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { HttpService } from "~/http/http.service";


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
 
    constructor(public router: RouterExtensions, public http: HttpService) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onLoginWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For log in with social provider you can add your custom logic or
        * use NativeScript plugin for log in with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSigninButtonTap(): void {

        let requestBody = new FormData();
        requestBody.append("email", this.email);
        requestBody.append("password", this.password);
        this.http.posthttp("auth/login?", requestBody).then((data: any) => {
            console.log(data);
        });
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
