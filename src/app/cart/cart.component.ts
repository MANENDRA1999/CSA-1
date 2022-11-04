import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './cart.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  formValue! : FormGroup
  allRestaurantData: any;
  showAdd!:boolean 
  showBtn!:boolean 
  constructor(private formbuilder : FormBuilder , private api:ApiService,private router:Router) { }
   restaurantModelObj:RestaurantData = new RestaurantData
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      itemname: [''],
      price : ['']
    })
    this.getAllData()

}
getAllData(){
  this.api.getCart().subscribe(res=>{
    this.allRestaurantData = res;
  })
}
deletecart(data:any){
  this.api.deletecart(data.id).subscribe(res=>{
    
    this.getAllData() 
  })
}
addorder(data :any){
  this.restaurantModelObj.itemname=data.itemname;
  this.restaurantModelObj.price=data.price;
  this.api.postOrder(this.restaurantModelObj).subscribe(res=>{
    alert ("Order placed successfully")
    this.deletecart(data)
    this.router.navigate(['orders'])
  },
  err=>{
    alert ("something went wrong")
  }
  )
}
}
