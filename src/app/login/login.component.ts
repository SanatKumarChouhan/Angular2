import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // loginId = ''
  // password = ''
  // message = ''

  form: any = {
    data: {},
    message: ''
  }

  constructor(private router: Router) {

  }

  signIn() {


    console.log(this.form.data.loginId)
    console.log(this.form.data.password)

    if (this.form.data.loginId == 'admin' && this.form.data.password == 'admin') {
      // this.form.message = 'login success'
      this.router.navigateByUrl('welcome')

    } else {
      this.form.message = 'Invalid login credentials'
    }
  }

}




