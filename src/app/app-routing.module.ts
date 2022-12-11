import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
//import { NotFoundComponent } from './not-found/not-found.component'
//import { ForbiddenComponent } from './forbidden/forbidden.component'
//import { AuthGuardService as AuthGuard } from "src/app/shared/services/auth-guard.service"
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'public',
        pathMatch: 'full'
      },
      {
        path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      },
      {
        path: 'private',
        //canActivate: [AuthGuard],
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
      },
      /* {
        path: 'notFound', component: NotFoundComponent
      },
      {
        path: 'forbidden', component: ForbiddenComponent
      }, */
      {
        path: '**',
        redirectTo: '/notFound'
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }