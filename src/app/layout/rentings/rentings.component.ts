import { Component, OnInit, ViewChild } from '@angular/core';
import { RentingsService } from 'src/app/services/rentings.service';
import { Renting } from 'src/app/models/renting';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';
import { CarDialogComponent } from './car-dialog/car-dialog.component';

@Component({
  selector: 'app-rentings',
  templateUrl: './rentings.component.html',
  styleUrls: ['./rentings.component.scss']
})
export class RentingsComponent implements OnInit {

  private rentings: Array<Renting>
  private currentUser : any
  displayedColumns = ['Car', 'Client', 'State'];
  public dataSource = new MatTableDataSource<Renting>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceRenting : RentingsService, private authService : AuthService,
    private serviceCar : CarsService, public dialog: MatDialog , private router : Router) { }
 
  ngOnInit() {
    this.getRentings();
  }

  get isAdmin(){
    return this.currentUser.data.user.role === 'admin';
}

get isOwner(){
  return this.currentUser.data.user.role === 'owner';
}

getRentings(){

  this.authService.currentUser.subscribe(x => this.currentUser =x);
  if(this.currentUser.data.user.role === 'admin'){
    console.log("this.currentUser.data.user.role")
    console.log(this.currentUser.data.user.role)
    this.serviceRenting.getAllRentings()
    .subscribe(data=> {
      console.log(data)
      this.dataSource.data = data 
    })
    // this.serviceRenting.getAllRentings()
    // .subscribe(rentings => {
    //   console.log(rentings)
    //   // this.rentings = rentings as Renting[];
    //   this.dataSource.data = rentings as Renting[];
    // })
  }else if(this.currentUser.data.user.role === 'owner'){
    console.log("this.currentUser.data.user.role")
    console.log(this.currentUser.data.user.role)
    this.serviceRenting.getRentingsByOwner(this.currentUser.data.user._id)
    .subscribe(data=>{
        console.log(data)
        // this.rentings = data as Renting[];
        this.dataSource.data = data as Renting[];

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

  

}
