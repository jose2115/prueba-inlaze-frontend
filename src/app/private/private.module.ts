import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCommentComponent } from './components/my-comment/my-comment.component';
import { SharedModule } from '../shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CardCommentComponent } from './components/card-comment/card-comment.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QueryDatePipe } from '../core/pipe/queryDate.pipe';
import { MycommentPipe } from '../core/pipe/mycomment.pipe';
import { QueryCommentPipe } from '../core/pipe/queryComment.pipe';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';




@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PrivateComponent,
    DashboardComponent,
    MyCommentComponent,
    CardCommentComponent,
    CreateCommentComponent,
    EditCommentComponent,
    MycommentPipe,
    QueryDatePipe,
    QueryCommentPipe
  ]
})
export class PrivateModule { }
