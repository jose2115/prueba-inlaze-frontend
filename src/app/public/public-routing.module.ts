import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'


const routes: Routes = [
  {
    path: '',
    // component: PublicComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
        // component: LoginComponent
      },
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterComponent,
      }
    ]
  },
  {
    path: '**', redirectTo: '/notFound'
  }
]


@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class PublicRoutingModule { }