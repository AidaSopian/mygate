import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { HttpService } from "~/http/http.service";


@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    public loginData: any;
    _url = "auth/login";
 
    constructor(public router: RouterExtensions, public http: HttpService) {
        this.loginData ={
            "email": "",
            "password": ""
        }
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

        console.log(this.loginData.email, this.loginData.password);
        
        let requestBody = new FormData();
        requestBody.append("email", this.loginData.email);
        requestBody.append("password", this.loginData.password);
        this.http.posthttp(this._url, requestBody).then((data: any) => {
            console.log(data);
        });
        this.router.navigate(["/home"]);
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }

    register() {
        this.router.navigate(["/register"]);
    }
}
