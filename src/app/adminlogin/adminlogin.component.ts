import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder , private _http:HttpClient , private router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email : [''],
      Password : ['']
    })
  }
  login(){
    this._http.get<any>("http://localhost:3000/adminsignup").subscribe(res=>{
     const user = res.find((a:any)=>{
     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
     })
     if(user){
       alert("login successfull")
       this.loginForm.reset
       this.router.navigate(['admin'])
     }
     else{
       alert("something went wrong")
     }
     
  },
  err=>{
    alert("server side error")
  }
  )
  }
}