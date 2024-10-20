import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private plateform_id : Object) { }
  getValueFormSessionStorage(params:string) :string | null {
    return isPlatformBrowser(this.plateform_id) ? sessionStorage.getItem(`${params}`) : null 
  }
  setValueForSessionStorage(params:string,value : string) :void {
   if(isPlatformBrowser(this.plateform_id)) sessionStorage.setItem(`${params}`,`${value}`)
  }
  removeValueFormSessionStorage(value : string):void {
     if(isPlatformBrowser(this.plateform_id)) sessionStorage.removeItem(value)
  }
  actualisation() : void {
   if(isPlatformBrowser(this.plateform_id)) location.reload()
  }
}
