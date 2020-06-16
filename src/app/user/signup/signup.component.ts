import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error=78;
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
    });
  }

  ngOnInit() {}

  signUpUser(){
    this.authService.signUp(
      this.form.get('username').value,
      this.form.get('password').value
    ).subscribe(
      (result:any) => {
        if(result['status'] == 'success'){
          this.form.reset();
          this.router.navigate(['signin']);
          console.log('registration successfull')
        } 
        else

        {console.log(this.error)}
      }
    )
  }

}
