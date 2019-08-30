import { User } from "./user";
import { Car } from "./car";

export class Renting {
    _id?: number;
    car: Car;
    client: User;
    inProgress:Boolean;

}
