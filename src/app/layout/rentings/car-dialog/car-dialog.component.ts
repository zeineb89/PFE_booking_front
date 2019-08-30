import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-dialog',
  templateUrl: './car-dialog.component.html',
  styleUrls: ['./car-dialog.component.scss']
})
export class CarDialogComponent implements OnInit {
  private carDetail : Car
  

    images = this.data.images
  



  constructor(private router : Router, public dialogRef: MatDialogRef<CarDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any, 
    private service : CarsService) { 
      console.log("car ************")
      console.log(data)
    }
  
    ngOnInit() {console.log(this.data)}
  
  
    onNoClick(): void {
    this.dialogRef.close();
  }

  
  closeDialog(){
    const dialogRef = this.dialogRef.close();
  }
  goToOwnerDetail(id : String){
    this.closeDialog();
    console.log(id)
    this.router.navigate([`../../owners/detailOwner/${id}`]);
  }

  deleteCar(car : Car){
    this.closeDialog()
    console.log("car=======================")
    console.log(car)
    this.service.deleteCar(car)
    .subscribe(data => {
      console.log(data)
      
    })
  }
}
