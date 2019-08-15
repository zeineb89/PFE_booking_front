import { User } from "./user";
import { Device } from "./device";

export class Car {
    _id?: number;
    description: string;
    modelDate: Number;
    numberOfDoors: Number;
    seatingCapacity: Number;
    dateVehicleFirstRegistered: Date;
    releaseDate: Date;
    options_accessoires: [String];
    price: string;
    images: [String];
    owner: User;
    address: Object;
    available: Boolean;
    energy: string;
    mileage : string;
    transmission:string;
    device : Device;
}
