import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.css']
})
export class MyCommentComponent implements OnInit {

  comments:any
  @Input() data: any;
  id: any;
  date:string = ''
  
  constructor(
    private _authService: AuthService,
    private comment: CommentService
  ) { }

  ngOnInit() {

    this.id = this._authService.getDecodedToken().id
    this.onListComment()
  }


  onListComment(){

    this.comment.listarComment().subscribe(
      resp => {
        this.comments = resp.list
        console.log("coment", resp)
      }
    )
  }

}
