import { HttpClient } from '@angular/common/http';
import { Injectable, IterableDiffers, OnDestroy } from '@angular/core';
import { child_road_list, fetch, parent_road_list } from '../simple_animation/animation';
import { Observable, Subscription, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {
  private subscription : Subscription | undefined 

  constructor(private http : HttpClient ) { }
  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe()
  }
  Add_new_parent_road(value : FormData):void {
    console.log("mandeana")
     this.http.post("http://localhost:5000/utilisateurs/add_avant_post/by_user",value).subscribe((res)=> {
      console.log(res);
    })
    }
  }
