import { Component } from '@angular/core';
import { admin } from '../admin';
import { EmpserService } from '../empser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin:admin=new admin();
  user="";
  password="";
  message: boolean=false;
   
  constructor(private service : EmpserService,private router:Router){}

  ngOnInit():void{
    let response=this.service.login();
    response.subscribe((data:any)=>this.admin=data);
  }

  login(){
    
   if(this.admin.email===this.user&& this.admin.password===this.password){
    this.router.navigate(['home']);
   }
   else{
  this.message=true;
  this.router.navigate(['login']);
  }
  }

}
