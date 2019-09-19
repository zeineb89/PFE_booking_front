import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  firstName = ''
      lastName= ''
      email= ''
      password= ''
      confirmPassword= ''
      gender= ''
      phone= ''
      city= ''
      street= ''
      zipCode= ''
      Country= ''
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UsersService) { 
    //   if (this.authService.currentUserValue) {
    //     this.router.navigate(['/']);
    // }

      

  }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
      
  // });
  }
  // get f() { return this.registerForm.controls; }
  onSignUp() {
    console.log("this.registerForm")
    console.log(this.email)
        // this.registerService.()
        // .pipe(first())
        // .subscribe(data =>{
            
        //     this.router.navigate([this.returnUrl]);
            
        // },
        // error =>{
        //     this.error = 'Please enter valid login and password';
        //     console.log(error)
        // })
  }
}
