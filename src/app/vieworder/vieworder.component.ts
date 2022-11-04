import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { OrderData } from './vieworder.model';
@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  formValue! : FormGroup
  allOrderData: any;
  constructor(private formbuilder : FormBuilder , private api:ApiService) { }
   orderModelObj:OrderData = new OrderData
  ngOnInit(): void {
    this.getAllData()

}

getAllData(){
  this.api.getOrder().subscribe(res=>{
    this.allOrderData = res;
  })
}
}