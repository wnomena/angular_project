import { HttpClient } from "@angular/common/http";

export class httprequest {
  constructor(private HttpClient : HttpClient){}
  async Add_new_parent_road(value : FormData):Promise<boolean> {
    console.log("mandeana")
    this.HttpClient.post("http://localhost:5000/utilisateurs/add_avant_post/by_user",value).subscribe((res)=> {
      console.log(res);
      return true
    })
    return true
    }
  
}