import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/core/services/rest.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  hide = true;
  showError = false;
  selectedTab!: number;

  signinForm = this._fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signupForm = this._fb.nonNullable.group({
    id: '',
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private _router: Router,
    private _restService: RestService,
    private _fb: FormBuilder,
    private _toastr: ToastrService
  ) {}

  signin() {
    this._restService.signin().subscribe((users) => {
      users.find((user) => {
        if (
          user.email === this.signinForm.value.email &&
          user.password === this.signinForm.value.password
        ) {
          this._router.navigateByUrl('panel');
        } else {
          this.showError = true;
        }
      });
    });
  }

  signup() {
    this.signupForm.get('id')?.setValue(uuid.v4());
    this._restService.signup(this.signupForm.value).subscribe(() => {
      this._toastr.success('User Creadted Successfully');
      this.selectedTab = 0;
    });
  }
}
