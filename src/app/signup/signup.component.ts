import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form:any={
    data:{},
    message:''
  }

  signUp(){
    console.log('form: ', this.form)
  }
}
