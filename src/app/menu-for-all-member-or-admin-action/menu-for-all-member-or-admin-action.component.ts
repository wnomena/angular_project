import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu-for-all-member-or-admin-action',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-for-all-member-or-admin-action.component.html',
  styleUrl: './menu-for-all-member-or-admin-action.component.css'
})
export class MenuForAllMemberOrAdminActionComponent implements OnInit {
  constructor(private router : Router){}
  ngif:string | undefined | null; 
  member_or_admin : string | null | undefined
  ngOnInit(): void {
      this.ngif = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
      if(this.ngif) this.member_or_admin = localStorage.getItem(`${this.ngif}`) == "1" ? localStorage.getItem(`${this.ngif}`) : "0"
      else this.member_or_admin = undefined
  }
  deconnexion() {
    let o:string | undefined | null= localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") != null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
    localStorage.removeItem(o ? o : "")
    localStorage.removeItem("id_for_admin_or_member_in_cap_sur_mada_web_site")
    localStorage.removeItem("token")
    location.reload()
  }
  change_pass():void {
    this.router.navigate(["change_pass"])
  }
  page_admin():void {
    this.router.navigate(["admin/home/list-of-parent"])
  }
  add_new_commentary() {
    this.router.navigate(["text"])
  }
  navigation() {
    if(this.member_or_admin == "1") return this.page_admin()
    else return this.add_new_commentary()
  }
 }
