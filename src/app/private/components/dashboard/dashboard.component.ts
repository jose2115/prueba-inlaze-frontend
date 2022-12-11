import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/interface/comment';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  comments:any
  @Input() data: any;

  date:string = ''
  search :string = ''
  constructor(
    private comment: CommentService
  ) { }

  ngOnInit() {

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
