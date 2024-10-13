import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getValueFormSessionStorage(params:string) :string | null {
    return sessionStorage.getItem(`${params}`)
  }
  setValueForSessionStorage(params:string,value : string) :void {
    sessionStorage.setItem(`${params}`,`${value}`)
  }
  removeValueFormSessionStorage(value : string) {
    sessionStorage.removeItem(value)
  }
  actualisation() : void {
    location.reload()
  }
}
