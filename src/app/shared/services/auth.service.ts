import { Injectable } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { HttpClient } from "@angular/common/http"
import { tap } from "rxjs/operators"
// import {Observable} from "rxjs"

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  
  public getDecodedToken () {
    const token = this.getLogin()
    return this.jwtHelper.decodeToken( token )
  }

  constructor (
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router,
  ) {
  }

  public decodeLocalToken () {
    const token = this.getLogin()
    return this.jwtHelper.decodeToken( token )
  }

  public getAttributeFromToken ( attribute: string ) {
    const decodeToken = this.decodeLocalToken()
    return decodeToken[attribute]
  }


  public isAuthenticated (): boolean {
    const token = this.getLogin()
    try {
      if ( this.jwtHelper.isTokenExpired( token ) ) {
        console.log( "Token Expired" )
        localStorage.clear()
        return false
        // this.logOut()
      }
    } catch ( e ) {
      // this.logOut()
      localStorage.clear()
      return false
    }
    return true
  }

  public setLogin ( token: string ): void {
    localStorage.setItem( "token", token )
  }
  public getLogin (): string {
    return localStorage.getItem( "token" ) || ''
  }
  public setRemoveToken (): void {
    return localStorage.removeItem( "token" )
  }

  public logOut (): void {
    localStorage.clear()
    this.router.navigate( ["/public/login"], { replaceUrl: true } )
  }


  //ver usuario


}

