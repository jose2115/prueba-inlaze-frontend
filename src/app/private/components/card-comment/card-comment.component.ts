import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent implements OnInit {

  @Input() data: any;
  id: any;

  formdisable: boolean = false
  commentId:Number = 0
  
  constructor(
    private _authService: AuthService,
  ) { }

  ngOnInit() {
  
    this.id = this._authService.getDecodedToken().id
  }

  enableForm(commentId:number, user:number){

    if(user == this.id){

      this.commentId = 0
      this.formdisable = true
      this.commentId = commentId
    }
    

  }

}
