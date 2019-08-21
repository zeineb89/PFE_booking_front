import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private ownersList : Array<User>
  private clientsList : Array<User>
  constructor(private httpClient : HttpClient) { }

  getAllOwners(){
    return this.httpClient.get(`${environment.urlAddress}/users/owners`)
    .pipe(map(data => { 
      this.ownersList = data as User[]
      console.log(this.ownersList)
      return this.ownersList;
    }))
  }
  getAllClients(){
    return this.httpClient.get(`${environment.urlAddress}/users/clients`)
    .pipe(map(data => { 
      this.clientsList = data as User[]
      console.log(this.clientsList)
      return this.clientsList;
    }))
  }

  deleteClient(_id:String){
    return this.httpClient.delete(`${environment.urlAddress}/users/${_id}`);
  }

  validateClient(_id:String, event : Boolean){
      return this.httpClient.put(`${environment.urlAddress}/users/validateClient/${_id}`,{event},this.generateHeaders());
  }
  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  getOneClient(_id : String){
   return this.httpClient.get(`${environment.urlAddress}/users/${_id}`)
    .pipe(map(client => { 
      console.log(client)
      return client;
    }))
  }

  getOneOwner(_id : String){
    return this.httpClient.get(`${environment.urlAddress}/users/${_id}`)
     .pipe(map(owner => { 
       console.log(owner)
       return owner;
     }))
   }
}
