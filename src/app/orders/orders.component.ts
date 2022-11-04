import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './orders.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  formValue! : FormGroup
  allRestaurantData: any;
  showAdd!:boolean 
  showBtn!:boolean 
  constructor(private formbuilder : FormBuilder , private api:ApiService) { }
   restaurantModelObj:RestaurantData = new RestaurantData
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      itemname: [''],
      price : ['']
    })
    this.getAllData()

}
getAllData(){
  this.api.getOrder().subscribe(res=>{
    this.allRestaurantData = res;
  })
}


deleteorder(data:any){
  this.api.deleteOrder(data.id).subscribe(res=>{
    alert("Order Cancelled successfully")
    this.getAllData() 
  })
}
}