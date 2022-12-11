import {Injectable, OnDestroy} from "@angular/core"
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router'
import {AuthService} from "./auth.service"

@Injectable()

export class AuthGuardService implements CanActivate, OnDestroy {
  private isAuthorized: true | UrlTree = true
  constructor (
    private _AuthService: AuthService,
    private _Router: Router
  ) {
    console.log( "Auth Guard Service instantiated" )
  }
  ngOnDestroy () {
    console.log( "Auth guard service destroyed" )
  }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    console.log( "AuthGuard Ejecutado" )
    if (!this._AuthService.isAuthenticated()) {
      console.log( "No esta autorizado" )
      this.isAuthorized = this._Router.parseUrl('/public/login')
    }
    return this.isAuthorized
  }

}
