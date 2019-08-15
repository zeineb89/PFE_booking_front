import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private returnUrl : String;
    error : String;
    constructor(private router: Router, private authService : AuthService, private route :ActivatedRoute) {}

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/' ;
    }

    onLogin(form : NgForm) {
        // console.log(form.value.email, form.value.password)
        // // localStorage.setItem('isLoggedin', 'true');
        // this.router.navigate(['/dashboard']);
        this.authService.Login(form.value.email, form.value.password)
        .pipe(first())
        .subscribe(data =>{
            
            this.router.navigate([this.returnUrl]);
            
        },
        error =>{
            this.error = 'Please enter valid login and password';
            console.log(error)
        })
    }

}
