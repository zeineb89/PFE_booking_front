import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  private ownerList : User[]
  constructor(private httpClient: HttpClient) { }

  getAllOwners(){
    return this.httpClient.get(`${environment.urlAddress}/users/owners`)
    .pipe(map(data => { 
      this.ownerList = data as User[]
      console.log(this.ownerList)
      return this.ownerList;
    }))
  }
}
