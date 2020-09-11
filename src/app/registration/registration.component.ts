import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  img = 'https://expert1c.com/wp-content/uploads/2017/02/login_rounded_right1600.png';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });

  }

  submit() {
    console.log('submit', this.form);
    sessionStorage.setItem('Login', JSON.stringify({
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    }));
    this.router.navigate(['']);
  }


}
