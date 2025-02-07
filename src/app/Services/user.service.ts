import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//import the httlpclient class
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {
//class before if you seen @Injectable decorator.it means it is a service.
//To communicate with restapis angular framework provided one class called Httpclient.
///THIS HTTPCLIENT CLASS HAVING FOLLOWING METHODS TO CALL THE RESTAPI METHODS.(get,post,put,delete)

  constructor(private readonly hc:HttpClient) {
//next inject the Httpclient class in the constructor create one local refrence variable like above.
//next use this refrence variable in below methods.
   }
   
BaseURI:String="http://localhost:9111/api";//This is the base url of our restapi.
   Login(formdata:any):Observable<any>
   {
    debugger;
   return  this.hc.post<any>(this.BaseURI+'/User/UserSignIn',formdata)
   }
}


//observable is comming from 'Rxjs'
//OBSERVABLE SEND THE REQUEST TO RESTAPI'S AND IT IS WAITING FOR THE RESPONSE.
//WE DON'T KNOW EXACTLY WHEN WE WILL GET THE RESPONSE.MAY BE YOU WILL GET THE RESPONSE WITHIN 10SEC OR 1 MIN......BASED ON YOUR RESTAPI RETURN TIME IT WILL TAKE.
//SO OBSERVABLE IS WAITING FOR RESPONSE ONCE IT GOT THE  RESPONSE IT RETURNS TO WHOEVER SUBSCRIBE THIS METHODS.
