import { Injectable, IterableDiffers, OnDestroy } from '@angular/core';
import { bool, child_road_list, commentary_model, fetch, fetch_clild_road, fetch_clild_road_2, member_model, parent_road_list } from '../simple_animation/animation';
import { Observable, Subscription, take, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {
  // constructor() {}
  private subscription : Subscription | undefined 
  private link : string = "https://web.caponmada.com"

  constructor(private http : HttpClient,private LocalStorage : LocalStorageService ) { }
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
    get_one_road(params : string | null) : Observable<{message :string, data : parent_road_list[]}> {
      return this.http.get<{message :string, data : parent_road_list[]}>(`${this.link}/public_get/parent_way/one_road/${params}`)
    } 
    get_one_child_road(name : any) :Observable<fetch_clild_road_2> {
      return this.http.get<fetch_clild_road_2>(`${this.link}/public_get/one_road/${name}`)
    }
    delete_parent_road(value : any):Observable<{message :string}> {
      return this.http.delete<{message : string}> (this.link + `/${this.LocalStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${value}` )
    }
    get_all_member() :Observable<{
      message : string,data : member_model[]
}> {
      return this.http.get<{message : string,data : member_model[]}>(`${this.link}/get_all_member`)
    }
    get_all_child_road() :Observable<fetch_clild_road> {
      return this.http.get<fetch_clild_road>(`${this.link}/0/public/way`)
    }
    get_some_child_road(id :any) {
      return this.http.get<fetch_clild_road>(`https://caponmada.com/${id}/public/way`)
    } 
    get_all_favorite() {
      return this.http.get<{data : child_road_list[]}>(`${this.link}/get_all/favorite_road`)
    }
    get_all_coommentary() :Observable<{message : string, liste :commentary_model[]}> {
      return this.http.get<{message : string, liste : commentary_model[]}>(`${this.link}/get_all_commentary`)
    }
    get_all_admin_all_member() : Observable<{data :  member_model[]}> {
      return this.http.get<{data :  member_model[]}>(`${this.link}/get_admin_or_member/1`)
    }
    delete_one_member(mail_member : string,mail_user : string | null) :Observable<{message : string}> {
      return this.http.delete<{message : string}>(`${this.link}/utilisateurs/delete_member/by_admin/${mail_user}/${mail_member}`)
    }
    add_new_member(value : any):Observable<{message : string}> {
      return this.http.post<{message : string}>(`${this.link}/utilisateurs/by_admin/create/new_member/${bool[0]}`,value)
    }
    add_new_commentary(mail : string | null | undefined, commentary : string) :Observable<{message :string}> {
      return this.http.post<{message: string}>(`${this.link}/add_new/commentary/by/member/${mail}`,{string_commentary : commentary})
    }
    subscription_method(value : any):Observable<{message : string}> {
      return this.http.post<{message : string}>(`${this.link}/subscription_member`,value)
    }
    update_child(value : FormData):Observable<{message : string}> {
      return this.http.put<{message : string}>(`${this.link}/utilisateurs/update_child_way/by_user`,value)
    }
    update_parent_road(value : FormData,params : string | null): Observable<{message : string}> {
      return this.http.put<{message : string}>(`${this.link}/utilisateurs/update_parent_road/by_user/${params}`,value)
    }
    update_road_to_be_a_favoorite(params1 : string |null | undefined,params2 : string):Observable<{message : string}> {
      return this.http.put<{message : string}>(`${this.link}/update/one_child_road/to_be_a_favorite/${params1}/${params2}`,{ headers: new HttpHeaders()})
    }
    login_member(value : any) : Observable<{message : string,token : string}> {
      return this.http.post<{message : string, token : string}>(`${this.link}/login_member`,value)
    }
    login_admin(value : any) : Observable<{message : string, token : string}> {
      return this.http.post<{message : string,token : string}>(this.link + "/login",value) 
  }
    delete_member(member_mail: String): Observable<{message : string}> {
      return this.http.delete<{message : string}>(`${this.link}/utilisateurs/${this.LocalStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${member_mail}`)
    }
    update_member_password(mail : any,body : any):Observable<{message : string}> {
      return this.http.put<{message : string}>(`${this.link}/utilisateurs/update/password/member/${mail}/${this.LocalStorage.getValueFormSessionStorage(mail)}`,body)
    }

}
// this.http.post("${this.link}/utilisateurs/add_avant_post/by_user",this.form_data)