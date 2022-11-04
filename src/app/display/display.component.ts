import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaturantData } from './display.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
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
     clickAddResto(){
       this.formValue.reset()
       this.showAdd= true;
       this.showBtn = false;
     }
addResto(){
  this.restaurantModelObj.itemname = this.formValue.value.itemname ;
  this.restaurantModelObj.category = this.formValue.value.category ;
  this.restaurantModelObj.price = this.formValue.value.price ;
  this.restaurantModelObj.availability = this.formValue.value.availability ;

this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
  alert ("Food Item added successfully")
  this.formValue.reset()
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


deleteResto(data:any){
  this.api.deleteRestaurant(data.id).subscribe(res=>{
    alert("Record deleted successfully")
    this.getAllData() 
  })
}

onEditResto(data:any){
  this.showAdd= false;
  this.showBtn = true;
  
  this.restaurantModelObj.id = data.id
  
  this.formValue.controls['itemname'].setValue(data.itemname)
  this.formValue.controls['category'].setValue(data.category)
  this.formValue.controls['price'].setValue(data.price)
  this.formValue.controls['availability'].setValue(data.availability)
}
updateResto(){
  this.restaurantModelObj.itemname = this.formValue.value.itemname ;
  this.restaurantModelObj.category = this.formValue.value.category ;
  this.restaurantModelObj.price = this.formValue.value.price ;
  this.restaurantModelObj.availability = this.formValue.value.availability ;
  this.api.updateRestaurant(this.restaurantModelObj, this.restaurantModelObj.id).subscribe(res=>{
    alert("Record updated Successfully")
    this.formValue.reset()
    this.getAllData()
  })
}
}




