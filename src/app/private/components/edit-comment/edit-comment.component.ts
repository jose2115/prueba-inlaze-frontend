import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/core/services/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  private fb: FormBuilder = new FormBuilder();
  public commentForm!: FormGroup
  id: any;
  data: any;

  constructor(
    private activerouter: ActivatedRoute,
    private _comment: CommentService,
    private router: Router
  ) { }

  ngOnInit() {
     this.id = this.activerouter.snapshot.paramMap.get('id');
     this.onShowComment()
    this.commentForm = this.editFormCommentBuilder( this.fb )
  }

  editFormCommentBuilder ( formBuilder: FormBuilder ) {
    return formBuilder.group( {
      title: ['', [Validators.required, Validators.minLength( 10 ), Validators.maxLength(30)]],
      comment: ['', [Validators.required, Validators.minLength( 10 ), Validators.maxLength(100)]],
    } )
  }

  editComment() {
    console.log("data", this.commentForm.value )
 
    if ( !this.commentForm.valid ) {
      return
    }
    
    this._comment.editComment(this.commentForm.value, this.id).subscribe(
      resp => {
        this.Toast.fire({ icon: 'success', title: resp.message });
        this.router.navigate( ['/private'] )

      }
    )
    
  }

  onShowComment(){

    this._comment.ShowComment(this.id).subscribe(
      resp => {
        this.data = resp.comment
      }
    )
  }

  get title() {return this.commentForm.get('title');}
  get comment() {return this.commentForm.get('comment');}


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

}
