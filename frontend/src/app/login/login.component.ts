import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    let fv = this.form.value;
    // console.log(fv.password.length !== 0 && fv.username.length !== 0);

    if (fv.password.length !== 0 && fv.username.length !== 0) {
      this.authService.authService({
        username: fv.username,
        password: fv.password
      }).subscribe(
        data => console.log(data)
      )
    }
  }

}
