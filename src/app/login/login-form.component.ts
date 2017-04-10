import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/login/login.interface';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.html'
})
export class LoginFormComponent implements OnInit{

  user: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.user = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
    
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    //console.log(value, valid);
    //localStorage.setItem('user', this.user.email );
  }

}