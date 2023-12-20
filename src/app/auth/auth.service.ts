import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private htttp:HttpClient) { }

  login(email:any,password:any){
    const url='http://localhost:3000/users';
    const body=[{email,password}];

    return this.htttp.post(url,body).pipe(
     map((response:any)=>{
      if(response.successful){
        return{success:true,user:response.user}
      }
      else{
        return {success:false,message:"invalid"}
      }
     })
    )
  }
}
