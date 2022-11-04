import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
   signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder , private _http:HttpClient , private router:Router)
    
   { }

  ngOnInit(): void {
   this.signupForm = this.formBuilder.group({
     FirstName:[''],
     LastName:[''],
     Email:[''],
     Mobile:[''],
     Password:[''],
   })
  }
  signup(){
   this._http.post<any>("http://localhost:3000/adminsignup" , this.signupForm.value).subscribe(res=>{
     alert("Register Successfully")
     this.signupForm.reset()
   this.router.navigate(['adminlogin'])
   },
   err=>{
     alert('something went wrong')
   }
   )
  }
}