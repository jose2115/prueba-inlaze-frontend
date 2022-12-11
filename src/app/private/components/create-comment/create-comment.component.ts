import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/core/services/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  private fb: FormBuilder = new FormBuilder();
  public commentForm!: FormGroup

  constructor(
    private comment: CommentService,
    private router: Router
  ) { }

  ngOnInit() {

    this.commentForm = this.createFormCommentBuilder( this.fb )
  }

  createFormCommentBuilder ( formBuilder: FormBuilder ) {
    return formBuilder.group( {
      title: ['', [Validators.required, Validators.minLength( 10 ), Validators.maxLength(30)]],
      comment: ['', [Validators.required, Validators.minLength( 10 ), Validators.maxLength(100)]],
    } )
  }

  createComment() {
    console.log("data", this.commentForm.value )
 
    if ( !this.commentForm.valid ) {
      return
    }
    
    this.comment.createComment(this.commentForm.value).subscribe(
      resp => {
        this.Toast.fire({ icon: 'success', title: resp.message });
        this.router.navigate( ['/private'] )

      }
    )
    
  }

  get title() {return this.commentForm.get('title');}


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
