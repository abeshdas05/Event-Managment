import { Component, OnInit } from '@angular/core';
import { emp } from '../Emp';
import { EmpserService } from '../empser.service';
import { Router } from '@angular/router';
import { admin } from '../admin';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  adm:admin=new admin();
  employee:any;
  employe:emp=new emp();
  showAddform: boolean=false;
  showList: boolean = true;
  showView: boolean=false;
  showUpdateForm:boolean=false;
  showPassform:Boolean=false;

  ids:any;
  constructor(private service:EmpserService,private route:Router,private router: Router){}

  //Global Func

  mainlist(){
    this.showUpdateForm=false;
   this.showAddform=false;
   this.showView=false;
   this.showPassform=false;
   this.showUpdatepass=false;
   this.ngOnInit();
   this.showList=true;
   }

   //password change
   showUpdatepass:boolean=false;
   chngpass(){
    let response=this.service.login();
    response.subscribe((data:any)=>this.adm=data);
    this.showAddform=false;
    this.showList=false;
    this.showView=false;
    this.showUpdateForm=false;
    this.showPassform=true;

  }
  updatepass(){
    let response=this.service.updatepass(this.adm);
    response.subscribe((data:any)=>this.adm=data);
    this.showUpdatepass=true
  }


  logout(){
    this.router.navigate(['login']);

  }

  // Addform function
  addform(){
    
     this.showAddform=true;
      this.showList=false;
      this.showMsg=false;
  }
  message:"";
  showMsg: boolean = false;
  isDisabled: boolean = false;

  public  registerNow(){
    //json resposne
  let response=this.service.registration(this.employe);
  response.subscribe((data:any)=>this.message=data); 
  this.showMsg=true; 
  this.employe=new emp();
  }


  emplist(){
    this.showAddform=false;
    this.ngOnInit();
    this.showList=true;  
  }
  

 
 // View function
  viewdetail(id:number){
    this.ids=id;
    let response=this.service.getbyid(this.ids);
    response.subscribe((data:any)=>this.employee=data);
    this.showView=true;
    this.showList=false;
    // this.route.navigate(['view',id]);
  }
  elist(){
    this.showView=false;
    this.showUpdateMsg=false;
    this.ngOnInit();
    this.showList=true;  
  }
  //  update detail
  showUpdateMsg:boolean=false;   

  updateemp(id:number){
    this.ids=id;
    let response=this.service.getbyid(this.ids);
    response.subscribe((data:any)=>this.employe=data);
  this.showView=false;
  this.showUpdateForm=true;
 }

 update(){
  let response=this.service.update(this.employe);
  response.subscribe((data:any)=>this.employe=data);  
  this.showUpdateMsg=true;  
  this.employe=new emp();
 }
 updempcard(id:any){
  this.ids=id;
  let response=this.service.getbyid(this.ids);
  response.subscribe((data:any)=>this.employee=data);
  this.showView=true;
  this.showUpdateForm=false;
 }
 
  //  delete detail
emplo:any[]=[];
showdelMsg:boolean=false;   

  public deleteemp(id:any){
    this.service.deleteemp(id).subscribe(()=>{this.emplo=this.emplo.filter(emplo=>emplo.id!==id)});
    this.showView=false;
    this.showdelMsg=true;
    this.ngOnInit();
    this.showList=true;
    this.employe=new emp();
    
  }
 
  ngOnInit(): void {
    let response= this.service.getall();
    response.subscribe((data:any)=>this.employee=data);
    
  }


}
