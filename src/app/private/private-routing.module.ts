import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreateCommentComponent } from './components/create-comment/create-comment.component'
//Guards
import { AuthGuardService as AuthGuard } from "src/app/shared/services/auth-guard.service"

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { EditCommentComponent } from './components/edit-comment/edit-comment.component'
import { MyCommentComponent } from './components/my-comment/my-comment.component'
// Components
import { PrivateComponent } from './private.component'


const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    //canActivate: [AuthGuard],
    children: [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },   
    {
        path: 'dashboard', component: DashboardComponent,
    },
    {
      path: 'mycomment', component: MyCommentComponent,
    },
    {
      path: 'create/comment', component: CreateCommentComponent,
    },
    {
      path: 'edit/comment/:id', component: EditCommentComponent,
    }
    ]
  },
  {
    path: '**', redirectTo: '/notFound'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }