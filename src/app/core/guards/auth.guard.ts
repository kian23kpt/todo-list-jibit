import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const _decodedToken: any = this._store.selectSnapshot(AuthState.decodedToken);
    // const _isAuthorized$ = this._store.select(AuthState.isAuthorized);

    // if (_decodedToken?.exp < new Date().getTime() / 1000) {
    //   this._store.dispatch(new StorageActions.SetAccessToken(null));
    // }

    // return _isAuthorized$.pipe(
    //   map(isAuthorized => {
    //     if (!isAuthorized) {
          return this._router.parseUrl('/auth');
    //     }
    //     return isAuthorized;
    //   })
    // );
  }
}
