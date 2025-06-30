import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginId = 'dddddd'
  password = 'ppppp'
  message = ''

  constructor(private router: Router) {

  }

  signIn() {

    
    console.log(this.loginId)
    console.log(this.password)

    if (this.loginId=='admin' && this.password=='admin') {
      this.message='login success'
      
    } else {
      this.message='login fail'
    }
  }

}




