import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { CustomerData } from './customers.model';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  formValue! : FormGroup
  allCustomerData: any;
  constructor(private formbuilder : FormBuilder , private api:ApiService) { }
   customerModelObj:CustomerData = new CustomerData
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email : [''],
      mobile :['']
    })
    this.getAllData()

}

getAllData(){
  this.api.getCustomer().subscribe(res=>{
    this.allCustomerData = res;
  })
}
}
