import { User } from "./user";
import { Car } from "./car";

export class Device{
    name: String;
    code: String;
    owner: User;
    car: Car;
    locked: Boolean;
}