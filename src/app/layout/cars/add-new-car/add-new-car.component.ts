import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BrandsService } from 'src/app/services/brands.service';
import { Brand } from 'src/app/models/brand';


// For MDB Angular Pro
import { AgmCoreModule } from '@agm/core'
import { DevicesService } from 'src/app/services/devices.service';
import { Device } from 'src/app/models/device';
import { CarsService } from 'src/app/services/cars.service';
@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;

  
  fileToUpload: Array<File> = []

  title = 'My first AGM project';
  lat = 35.81657;
  lng = 10.63249;
  
  brandsList : Array<Brand>
  devicesList: Array<Device>
  newDevice: Device
  constructor(private _formBuilder: FormBuilder, 
    private serviceBrand: BrandsService, 
    private serviceDevice: DevicesService, 
    private serviceCar: CarsService) { }

  ngOnInit() {
    this.getAllBrands();
    this.getDevicesOwner();
    this.firstFormGroup = this._formBuilder.group({
      description: ['',Validators.required],
      modelDate:['',[Validators.required,Validators.min(1900), Validators.max(2100)]],
      numberOfDoors:['',[Validators.required, Validators.min(1)]],
      seatingCapacity:['',[Validators.required, Validators.min(1)]],
      brand:['',Validators.required],
      energy:['',Validators.required],
      mileage:['',Validators.required],
      transmission:['manual'],
      price:['',[Validators.required, Validators.min(0)]],
      images:['',Validators.required],
      options_accessoires:[''],
    });
    this.secondFormGroup = this._formBuilder.group({
      deviceName: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
    });
  }

  getAllBrands(){
    this.serviceBrand.getBrands()
    .subscribe(brands =>{
      console.log(brands)
      this.brandsList = brands
    })
  }

  markerDragEnd(m: any, $event: any) {
    this.lat = m.coords.lat;
    this.lng = m.coords.lng;
    //this.findAddressByCoordinates();
    console.log(this.lat, this.lng)
  }


  submit(){
    // console.log(this.firstFormGroup)
    // console.log(this.secondFormGroup)
    // console.log(this.thirdFormGroup)
    // console.log(this.newDevice)
    // console.log(this.lat)
    // console.log(this.lng)
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let ownerId = currentUser.data.user._id
    let options_accessoires =[]
    if(this.firstFormGroup.controls.options_accessoires.value !== ""){

    }
    var car = {
      description:this.firstFormGroup.controls.description.value ,
      modelDate:this.firstFormGroup.controls.modelDate.value,
      numberOfDoors:this.firstFormGroup.controls.numberOfDoors.value ,
      seatingCapacity: this.firstFormGroup.controls.seatingCapacity.value,
      options_accessoires: options_accessoires,
      price:this.firstFormGroup.controls.price.value ,
      images: this.firstFormGroup.controls.images.value,
      owner: ownerId,
      address:{lat : this.lat, lng:this.lng},
      available : true,
      energy:this.firstFormGroup.controls.energy.value ,
      mileage: this.firstFormGroup.controls.mileage.value,
      transmission: this.firstFormGroup.controls.transmission.value,
      device: this.newDevice,
      brand: this.firstFormGroup.controls.brand.value,
    }
    console.log(car)

    this.serviceCar.createNewCar(car)
    .subscribe(data =>{
      console.log(data)
    })
  }

  handleFileInput(event) {
    // console.log(event);
  const formData: any = new FormData();

  const files: Array<File> = event.target.files;
  // console.log('files');
  // console.log(files);
  // console.log(this.fileToUpload)

  for(let i =0; i < files.length; i++){
    formData.append("uploads[]", files[i], files[i]['name']);
}
// console.log("formData")
// console.log(formData)
  }

  getDevicesOwner(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let id = currentUser.data.user._id
    console.log('id***************************')
    console.log(id)
    this.serviceDevice.getDevicesByOwner(id)
    .subscribe(data => {
        this.devicesList = data
        console.log("this.devicesList")
        console.log(this.devicesList)
    })
  }


  createDevice(){
    console.log("name")
    let name = this.secondFormGroup.controls.deviceName.value
    console.log(name)
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let device = {name:name,owner:currentUser.data.user._id}
    this.serviceDevice.createNewDevice(device)
    .subscribe(data=>{
        console.log("data creating new device")
        console.log(data)
        this.newDevice = data as Device
        console.log(this.newDevice)
    })
  }
}