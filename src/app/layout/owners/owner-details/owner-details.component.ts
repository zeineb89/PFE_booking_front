import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CarsService } from 'src/app/services/cars.service';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {
  private id = this.activateRoue.snapshot.params.id
  private ownerfound : User
  private cars : Array<Car>

  constructor(private activateRoue : ActivatedRoute,private service : UsersService, private carsService : CarsService) { }

  ngOnInit() {
    this.getOneOwner();
    this.getOwnerCars(this.id)
  }

  getOneOwner(){
    this.service.getOneOwner(this.id).subscribe(owner =>{
      this.ownerfound = owner as User
      console.log(this.ownerfound)

    })
  }

    getOwnerCars(ownerID : Number){
      this.carsService.getCarsByOwner(ownerID)
      .subscribe(data=>{
          console.log(data)
          this.cars = data as Car[];
      })
  }
}
