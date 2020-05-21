import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}
//sign up for firebase login Jarkko Hämäläinen 1701558
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      //Send verification email and then go to verify-email page Jarkko Hämäläinen 1701558
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
}

