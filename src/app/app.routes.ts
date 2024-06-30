import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { OtherComponentsComponent } from './other-components/other-components.component';
import { SlideComponentForHomeComponent } from './slide-component-for-home/slide-component-for-home.component';
import { LoginAndSubscriptionComponent } from './login-and-subscription/login-and-subscription.component';
import { ChoiceBetweenAdminOrMemberComponent } from './choice-between-admin-or-member/choice-between-admin-or-member.component';
import { SubscriptionAdminAndMemberComponent } from './subscription-admin-and-member/subscription-admin-and-member.component';
import { PassComponentForSubsxriptionComponent } from './pass-component-for-subsxription/pass-component-for-subsxription.component';
import { GetAllParentRoadComponent } from './get-all-parent-road/get-all-parent-road.component';
import { AddAndUpdateParentRoadComponent } from './add-and-update-parent-road/add-and-update-parent-road.component';
import { AddAndUpdateChildRoadComponent } from './add-and-update-child-road/add-and-update-child-road.component';
import { MenuBarAdminComponent } from './menu-bar-admin/menu-bar-admin.component';
import { MemberManagerComponent } from './member-manager/member-manager.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { ShowStringCommentaryComponent } from './show-string-commentary/show-string-commentary.component';

export const routes: Routes = [{
    path : "rakoto",
    component : MenuBarAdminComponent
},
{
    path : "login/subscription",
    component : ChoiceBetweenAdminOrMemberComponent,
    children : [{
        path : "login",
        component : LoginAndSubscriptionComponent
    },
{
    path: "subscription",
    component : SubscriptionAdminAndMemberComponent
},
{
    path : "confirmation/:complet_name/:mail",
    component : PassComponentForSubsxriptionComponent  
}]
}];