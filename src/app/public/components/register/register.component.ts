import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';
import { validarQueSeanIguales } from './register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  private fb: FormBuilder = new FormBuilder();
  public registerForm!: FormGroup
  
  constructor(
    private _register: RegisterService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.registerForm = this.createFormRegisterBuilder( this.fb )
  }

  createFormRegisterBuilder ( formBuilder: FormBuilder ) {
    return formBuilder.group( {
      nickName: ['', [Validators.required, Validators.minLength( 3 ), Validators.maxLength(60)]],
      name: ['', [Validators.required, Validators.minLength( 3 ), Validators.maxLength(60), Validators.pattern('[A-zÀ-ú, ,.]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength( 8 ), Validators.maxLength(15)]],
      password2: ['', [Validators.required, Validators.minLength( 8 ), Validators.maxLength(15)]]
    },
    {
      validators: validarQueSeanIguales
    } )
  }

  register () {
    console.log("data", this.registerForm.value )
 
    if ( !this.registerForm.valid ) {
      return
    }
    
    this._register.register(this.registerForm.value).subscribe(
      resp => {
        this.Toast.fire({ icon: 'success', title: resp.message });
        this.router.navigate( ['/public'] )
         console.log("return", resp)
      }
    )
    
  }

  checarSiSonIguales(): boolean {
    return this.registerForm.hasError('noSonIguales') &&
      this.registerForm.get('password')!.dirty &&
      this.registerForm.get('password2')!.dirty;
  }

  // Alertas 
public Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

  get name() {return this.registerForm.get('name');}
  get nickName() {return this.registerForm.get('nickName');}
  get email() {return this.registerForm.get('email');}
  get password() {return this.registerForm.get('password');}
  get password2() {return this.registerForm.get('password2');}

}
