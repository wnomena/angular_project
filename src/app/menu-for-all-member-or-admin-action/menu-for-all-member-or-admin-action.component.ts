import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-menu-for-all-member-or-admin-action',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-for-all-member-or-admin-action.component.html',
  styleUrl: './menu-for-all-member-or-admin-action.component.css'
})
export class MenuForAllMemberOrAdminActionComponent implements OnInit {
  constructor(private router : Router,private localStorage : LocalStorageService){}
  ngif:string | undefined | null; 
  member_or_admin : string | null | undefined
  ngOnInit(): void {
      this.ngif = this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
      if(this.ngif) this.member_or_admin = this.localStorage.getValueFormSessionStorage(`${this.ngif}`) == "1" ? this.localStorage.getValueFormSessionStorage(`${this.ngif}`) : "0"
      else this.member_or_admin = undefined
  }
  deconnexion() {
    let o:string | undefined | null= this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") != null ? this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
    this.localStorage.removeValueFormSessionStorage(o ? o : "")
    this.localStorage.removeValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site")
    this.localStorage.removeValueFormSessionStorage("token")
    this.localStorage.actualisation()
  }
  change_pass():void {
    this.router.navigate(["dist/first_project_with_angular/browser/change_pass"])
  }
  page_admin():void {
    this.router.navigate(["dist/first_project_with_angular/browser/admin/home/list-of-parent"])
  }
  add_new_commentary() {
    this.router.navigate(["dist/first_project_with_angular/browser/text"])
  }
  navigation() {
    if(this.member_or_admin == "1") return this.page_admin()
    else return this.add_new_commentary()
  }
 }
