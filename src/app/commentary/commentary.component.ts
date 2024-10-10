import { Component, OnInit } from '@angular/core';
import { commentary_model } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { ShowStringCommentaryComponent } from '../show-string-commentary/show-string-commentary.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentary',
  standalone: true,
  imports:  [NgFor,ShowStringCommentaryComponent],
  templateUrl: './commentary.component.html',
  styleUrl: './commentary.component.css'
})
export class CommentaryComponent implements OnInit {
  display:"none" | "flex" = "none"
  string: String = ""
  list_table:commentary_model[] = [] 
  constructor(private http:HttpClient,private router : Router) {}
  ngOnInit(): void {
    let i:any= localStorage.getItem("id") !== null ? localStorage.getItem("id") : undefined
    if(i) this.http.get<{message : string ,liste :  commentary_model[]}>("https://caponmada.com/get_all_commentary").subscribe((res)=> {
      for(let i of res.liste) this.list_table.push(i)
    })
    else this.router.navigate(["dist/first_project_with_angular/browser/login/subscription/login"])
  }
  remise_value(string : String) {
    this.string = string
  }
}
