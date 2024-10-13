import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-menu-bar-admin',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './menu-bar-admin.component.html',
  styleUrl: './menu-bar-admin.component.css'
})
export class MenuBarAdminComponent implements OnInit{
  constructor(private router : Router,private localStorage : LocalStorageService){}
  ngif:string | undefined | null; 
  member_or_admin : string | null | undefined
  ngOnInit(): void {
      this.ngif = this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") : undefined
      if(this.ngif) this.member_or_admin = this.localStorage.getValueFormSessionStorage(`${this.ngif}`)
      else this.router.navigate(["dist/first_project_with_angular/browser/"])
      if(this.member_or_admin !== "1") this.router.navigate(["dist/first_project_with_angular/browser/"])
  }
}
