import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.form = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  signInUser(){
    this.authService.signIn(
      this.form.get('email').value,
      this.form.get('password').value
    );
  }

}
