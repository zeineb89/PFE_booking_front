import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Renting } from '../models/renting';

@Injectable({
  providedIn: 'root'
})
export class RentingsService {
  rentingsList : Array<Renting>
  constructor(private http : HttpClient) { }

  getAllRentings(){
    console.log("getAllRentings *****************************")
    return this.http.get(`${environment.urlAddress}/rentings`)
    .pipe(map(data => { 
      console.log("data -----------------------------")
      console.log(data)
      this.rentingsList = data as Renting[]
      console.log(this.rentingsList)
      return this.rentingsList;
    }))
  }

  getRentingsByOwner(ownerId: Number){
    return this.http.get(`${environment.urlAddress}/rentings/owner/${ownerId}`)
    .pipe(map(data =>{

      console.log(data)
      this.rentingsList = data as Renting[]
      return this.rentingsList;
    }))
  }
}
