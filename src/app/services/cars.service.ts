import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsList : Array<Car>
  private ownerCars: Array<Car>
  private car : Car;
  constructor(private http : HttpClient) {  
    
  }

  getAllCars(){
    return this.http.get(`${environment.urlAddress}/cars`)
    .pipe(map(cars =>{
      console.log("cars**********************************")
      this.carsList = cars as Car[]
      console.log(this.carsList)
      return this.carsList;
    }))
  }

  getOneCar(_id: Number){
    return this.http.get(`${environment.urlAddress}/cars/${_id}`)
    .pipe(map(data =>{

      console.log(data)
      this.car = data as Car
      return this.car;
    }))
  }

  getCarsByOwner(ownerId: Number){
    return this.http.get(`${environment.urlAddress}/cars/owner/${ownerId}`)
    .pipe(map(data =>{

      console.log(data)
      this.ownerCars = data as Car[]
      return this.ownerCars;
    }))
  }

  createNewCar(formData){
    return this.http.post(`${environment.urlAddress}/cars/addCar`,formData)
    .pipe(map(data => {
      console.log(data)
    }))
  }

  deleteCar(car:Car){
    console.log(car)
    return this.http.delete(`${environment.urlAddress}/cars/${car._id}`)
    .pipe(map(data => {
      console.log(data)
    }))
  }

}
