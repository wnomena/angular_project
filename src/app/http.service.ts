import { Injectable, IterableDiffers, OnDestroy } from '@angular/core';
import { bool, child_road_list, fetch, member_model, parent_road_list } from '../simple_animation/animation';
import { Observable, Subscription, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {
  private subscription : Subscription | undefined 
  private link : string = "https://web.caponmada.com"

  constructor(private http : HttpClient ) { }
  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe()
  }
  Add_new_parent_road(value : FormData):Observable<any> {
    console.log("mandeana")
     return this.http.post(`${this.link}/utilisateurs/add_avant_post/by_user`,value)
    }
    get_all_parent_road():Observable<fetch> {
      return this.http.get<fetch>(`${this.link}/get_all/parent_circuit`)
    }
    delete_parent_road(value : any):Observable<{message :string}> {
      return this.http.delete<{message : string}> (this.link + `/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${value}` )
    }
    get_all_member() :Observable<{
      message : string,data : member_model[]
}> {
      return this.http.get<{message : string,data : member_model[]}>(`${this.link}/get_all_member`)
    }
    delete_one_member(mail_member : string,mail_user : string | null) :Observable<{message : string}> {
      return this.http.delete<{message : string}>(`${this.link}/utilisateurs/delete_member/by_admin/${mail_user}/${mail_member}`)
    }
    add_new_member(value : any):Observable<{message : string}> {
      return this.http.post<{message : string}>(`${this.link}/utilisateurs/by_admin/create/new_member/${bool[0]}`,value)
    }
    subscription_method(value : any):Observable<{message : string}> {
      return this.http.post<{message : string}>(`${this.link}/subscription_member`,value)
    }
    update_child(value : FormData):Observable<{message : string}> {
      return this.http.put<{message : string}>(`${this.link}/utilisateurs/update_child_way/by_user`,value)
    }
    login_member(value : any) : Observable<{message : string,token : string}> {
      return this.http.post<{message : string, token : string}>(`${this.link}/login_member`,value)
    }
    login_admin(value : any) : Observable<{message : string, token : string}> {
      return this.http.post<{message : string,token : string}>(this.link + "/login",value) 
  }
    delete_member(value : any): Observable<{message : string}> {
      return this.http.delete<{message : string}>(`${this.link}/utilisateurs/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${value}`)
    }

}