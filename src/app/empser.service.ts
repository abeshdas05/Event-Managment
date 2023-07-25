import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class EmpserService {

  constructor(private http:HttpClient) { }
 
   public login(){
    let res =this.http.get("http://localhost:3000/Admin");
   return res;
   }
   
   public updatepass(adm: any){
    return this.http.put("http://localhost:3000/Admin", adm);
   }

  public registration(value:any){
    return this.http.post("http://localhost:3000/employee",value,{responseType:'text' as 'json'});
  }
  public getall(){
    return this.http.get("http://localhost:3000/employee");
  }
  public getbyid(id:any){
  let res =this.http.get("http://localhost:3000/employee/"+id);
   return res;
  }

  public update(value:any):Observable<any>{
    return this.http.put("http://localhost:3000/employee/"+value.id,value);
  }
  
  public deleteemp(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/employee/"+id);
     
     }
     
    

}
