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
import { ListOfParentRoadUpdateAndDeleteComponent } from './list-of-parent-road-update-and-delete/list-of-parent-road-update-and-delete.component';
import { FooterComponent } from './footer/footer.component';
import { InternalFooterComponent } from './internal-footer/internal-footer.component';
import { ListOfChildRoadToDeleteAndUpdateComponent } from './list-of-child-road-to-delete-and-update/list-of-child-road-to-delete-and-update.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { FavoriteRoadComponent } from './favorite-road/favorite-road.component';
import { SomeImageComponent } from './some-image/some-image.component';
import { MadagascarPresentationComponent } from './madagascar-presentation/madagascar-presentation.component';
import { GetAllChildRoadWithIdComponent } from './get-all-child-road-with-id/get-all-child-road-with-id.component';
import { DevisAndContactComponent } from './devis-and-contact/devis-and-contact.component';
import { TextComponentForChildRoadComponent } from './text-component-for-child-road/text-component-for-child-road.component';
import { AssemblyHomeComponent } from './assembly-home/assembly-home.component';
import { LinkForAllChildRoadComponent } from './link-for-all-child-road/link-for-all-child-road.component';
import { MenuForAllMemberOrAdminActionComponent } from './menu-for-all-member-or-admin-action/menu-for-all-member-or-admin-action.component';
import { OtherComponentsComponent } from './other-components/other-components.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddNewCommentaryByMemberComponent } from './add-new-commentary-by-member/add-new-commentary-by-member.component';


export const routes: Routes = [{
    path : "",
    component : AssemblyHomeComponent
},{
    path : "text",
    component: AddNewCommentaryByMemberComponent 
},
{
    path : "public/all_child/:id",
    component : GetAllChildRoadWithIdComponent
},{
    path : "commentary/all",
    component : OtherComponentsComponent
},
{
    path : "public/information/:name",
    component : TextComponentForChildRoadComponent
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
}]
},{
    path : "change_pass",
    component : ChangePasswordComponent
},
{
    path : "confirmation/:complet_name/:mail",
    component : PassComponentForSubsxriptionComponent  
},
{
    path : "admin/home",
    component : MenuBarAdminComponent,
    children : [{
        path : "list-of-parent",
        component : ListOfParentRoadUpdateAndDeleteComponent
    },{
        path : "list-of-child/:id",
        component : ListOfChildRoadToDeleteAndUpdateComponent
    },{
        path : "update/parent-road/:id",
        component : AddAndUpdateParentRoadComponent
    },{
        path : "update/child-road/:name/:id",
        component : AddAndUpdateChildRoadComponent
    },{
        path : "list-of-commentary",
        component : CommentaryComponent
    },{
        path : "list-of-member",
        component : MemberManagerComponent
    }]
}];