import { Role } from "./role";

export class User {
    _id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    birthDate: Date;
    gender: string;
    image: string;
    valid: Boolean;
    driverLicence: string;
    cin: string;
    address: Object;
    token?: string
}
