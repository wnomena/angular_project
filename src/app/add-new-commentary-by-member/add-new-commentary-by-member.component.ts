import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { fetch_clild_road ,child_road_list, commentary_model} from '../../simple_animation/animation';
import { NgFor, NgIf } from '@angular/common';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-new-commentary-by-member',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './add-new-commentary-by-member.component.html',
  styleUrl: './add-new-commentary-by-member.component.css'
})
export class AddNewCommentaryByMemberComponent implements OnInit{
  mail : string | undefined | null;
  type2 : string | undefined | null;
  all_under : child_road_list[] | undefined;
  authorized : boolean | undefined

  constructor(private router : Router,private http : HttpService) {}

  ngOnInit(): void {
    let inrabge:child_road_list[] = []
    if(localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null) {
       this.mail = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : null 
        this.type2 = localStorage.getItem(this.mail ? this.mail : "") == "1" ? "Administrator" : "Member" 
        this.http.get_all_coommentary().subscribe((a)=> {
         if(Array.from(a.liste).filter((c) => c.mail == this.mail).length == 0) {
          this.authorized = true
          this.http.get_all_child_road().subscribe((a)=> {
            for(let i of a.data) {
             inrabge.push(i)
            }
            this.all_under = [...inrabge]
          })
         } else {
            this.authorized = false
         }
        })
    }
    else {
      this.router.navigate(["dist/first_project_with_angular/browser/"])
    }
  }


  next(el: HTMLDivElement) {
    el.scrollTo(el.scrollLeft + el.offsetWidth,0)
  }
  preview(el : HTMLDivElement) {
    el.scrollTo(el.scrollLeft - el.offsetWidth,0)
  }

  validate(string_commentary : string, parent_div : HTMLDivElement) {
    for(let i = 0; i < parent_div.children.length; i++) {
      if(parent_div.children[i].children[0].children[0].classList.contains("bi-heart-fill")) {
        // let find_in_table =  Array.from(parent_div.children[i].children[0].children[1].innerHTML.split(" "))[1]
        this.http.update_road_to_be_a_favoorite(this.mail,Array.from(parent_div.children[i].children[0].children[1].innerHTML.split(" "))[2]).subscribe((a) => console.log(a))
        this.http.add_new_commentary(this.mail,string_commentary).subscribe({next : a => {
          this.router.navigate([""])
        },
        error : err => {
          alert(err)
        }
      })
      }
    }
  }
  change_class (el : HTMLElement) {
    if(el.classList.contains("bi-heart")) el.classList.replace("bi-heart","bi-heart-fill")
    else el.classList.replace("bi-heart-fill","bi-heart")
    
  }
}