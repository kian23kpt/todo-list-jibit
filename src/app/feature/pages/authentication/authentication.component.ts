import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  constructor(private _router: Router) {}

  signin() {
    this._router.navigateByUrl('panel')
  }

  signup() {}
}
