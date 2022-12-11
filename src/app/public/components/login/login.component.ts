import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private fb: FormBuilder = new FormBuilder();
  public loginForm!: FormGroup
  
  constructor(
    private _login: LoginService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.createFormLoginBuilder( this.fb )
  }

  createFormLoginBuilder ( formBuilder: FormBuilder ) {
    return formBuilder.group( {
      email: ['', [Validators.required, Validators.minLength( 3 )]],
      password: ['', [Validators.required, Validators.minLength( 3 )]]
    } )
  }

  login () {
    console.log("data", this.loginForm.value )
 
    if ( !this.loginForm.valid ) {
      return
    }
    
    this._login.login( this.loginForm.value).subscribe(
      resp => {

       this.auth.setLogin( resp.token )
       this.router.navigate( ['/private'] )
        console.log( resp.token )
       // this._AuthService.setLogin( res.token )
        //this._AuthService.setRolesAndPermissions( res.token )
        //this._Router.navigate( ['/private'] )
      }
    )
  }

  get email() {return this.loginForm.get('email');}
  get password() {return this.loginForm.get('password');}

}
