import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  private devicesList : Array<Device>
  constructor(private http : HttpClient) { }


  getDevicesByOwner(_id: string){
  return this.http.get(`${environment.urlAddress}/devices/owner/${_id}`)
    .pipe(map(data => {
      this.devicesList = data as [Device]
      return this.devicesList
    }))
  }


  createNewDevice(data : any){
    return this.http.post(`${environment.urlAddress}/devices/addDevice`,data)
    .pipe(map(data => {
      console.log(data)
      return data
    }))
  }
}
