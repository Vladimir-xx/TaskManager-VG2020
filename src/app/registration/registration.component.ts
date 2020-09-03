import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  img: string = 'https://expert1c.com/wp-content/uploads/2017/02/login_rounded_right1600.png';
form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl('',[Validators.minLength(6), Validators.required])
    });
  }

  submit() {
console.log('submit' , this.form);
  }
}
