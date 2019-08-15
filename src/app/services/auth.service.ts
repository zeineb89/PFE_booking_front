import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  Login(email: string, password: string){
    return this.http.post<any>(`${environment.urlAddress}/users/auth/login`,{email, password})
    .pipe(map(user => { 
      if(user && user.data.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
         console.log(localStorage)
      }
      return user;
    }))
  }
    LogOut(){
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
}
