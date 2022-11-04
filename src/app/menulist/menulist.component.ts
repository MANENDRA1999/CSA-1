import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaturantData } from './menulist.model';
@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  formValue! : FormGroup
  allRestaurantData: any;
  showAdd!:boolean 
  showBtn!:boolean 
  constructor(private formbuilder : FormBuilder , private api:ApiService) { }
   restaurantModelObj:RestaturantData = new RestaturantData
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      itemname: [''],
      category: [''],
      price : [''],
      availability :['']
    })
    this.getAllData()

}
addcart(data:any){
  this.restaurantModelObj.itemname=data.itemname;
  this.restaurantModelObj.price=data.price;
  this.api.postCart(this.restaurantModelObj).subscribe(res=>{
    alert ("Food Item added to Cart successfully")
    this.getAllData() 
  },
  err=>{
    alert ("something went wrong")
  }
  )
}
getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData = res;
  })
}
}