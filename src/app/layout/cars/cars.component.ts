import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';
import { MatDialog } from '@angular/material';
import { CarDialogComponent } from './car-dialog/car-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  private cars : Array<Car> ;
  currentUser :any;
  constructor(private authService : AuthService, private service : CarsService, public dialog: MatDialog, private router : Router) {
   }

  ngOnInit() {
      this.getCars();
  }

  get isAdmin(){
      return this.currentUser.data.user.role === 'admin';
  }

  get isOwner(){
    return this.currentUser.data.user.role === 'owner';
  }

  getCars(){

    this.authService.currentUser.subscribe(x => this.currentUser =x);
    if(this.currentUser.data.user.role === 'admin'){
      this.service.getAllCars()
      .subscribe(cars => {
        console.log(cars)
        this.cars = cars as Car[];
      })
    }else {
      this.service.getCarsByOwner(this.currentUser.data.user._id)
      .subscribe(data=>{
          console.log(data)
          this.cars = data as Car[];
      })
    }

  }



  openCarDialog(car: Car): void {
      console.log(car)
    const dialogRef = this.dialog.open(CarDialogComponent, {
        data: car
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
    

  }
  
  addCar(){
    console.log("ggggggggggg")
    this.router.navigate([`cars/newCar`]);
  }

}
