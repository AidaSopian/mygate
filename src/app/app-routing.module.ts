import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "~/login/login.component";
import { RegisterComponent } from "~/register/register.component";
import { InviteVisitorComponent } from "~/invite-visitor/invite-visitor.component";
import { VisitorsComponent } from "~/visitors/visitors.component";
import { MyApartmentComponent } from "~/my-apartment/my-apartment.component";
import { ProfileComponent } from "~/profile/profile.component";

const routes: Routes = [
    //root page
    { path: "", redirectTo: "/my-apartment", pathMatch: "full" },

    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "invite-visitor", component: InviteVisitorComponent },
    { path: "visitor", component: VisitorsComponent },
    { path: "my-apartment", component: MyApartmentComponent },
    { path: "profile", component: ProfileComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
