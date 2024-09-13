import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuForAllMemberOrAdminActionComponent } from '../menu-for-all-member-or-admin-action/menu-for-all-member-or-admin-action.component';
import { reload } from '../../simple_animation/animation';
import { window } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other-components',
  standalone: true,
  imports: [NgIf,MenuForAllMemberOrAdminActionComponent,RouterLink],
  templateUrl: './other-components.component.html',
  styleUrl: './other-components.component.css'
})
export class OtherComponentsComponent implements OnInit,OnDestroy {
  mail = "wnomena58@gmail.com"
  ngif:string | undefined;
  admin_or_member : string | undefined | null;
  public acces() {
    let i : any = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
      this.ngif = i
      this.admin_or_member =  localStorage.getItem(i) !== null ? localStorage.getItem(i) : undefined 
  }
  ngOnInit(): void {
      this.acces()
    }
  ngOnDestroy(): void {
      this.acces()
  }
}
