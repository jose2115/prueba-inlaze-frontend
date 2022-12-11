import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private nameURL: string = environment.apiUrl + '/comment'

constructor(
  private _authService: AuthService,
  private http: HttpClient,
) { }

get token(): string {
  return 'Bearer ' + this._authService.getLogin() || '';
}

get headers() {
  return {
    headers: {
      'Authorization': this.token
    }
  }
}

createComment(formData:any){

  const url = `${this.nameURL}/create`;
  return this.http.post(url, formData, this.headers).pipe(
    tap( ( resp:any ) => {
    
    })
  );
  
}

editComment(formData:any, id:number){

  const url = `${this.nameURL}/edit/${id}`;
  return this.http.put(url, formData, this.headers).pipe(
    tap( ( resp:any ) => {
    
    })
  );
  
}


listarComment(){
  const url = `${this.nameURL}/list`;
  return this.http.get(url, this.headers).pipe(
    tap( (resp:any) => {
    } )
  )
}

ShowComment(id:number){
  const url = `${this.nameURL}/show/${id}`;
  return this.http.get(url, this.headers).pipe(
    tap( (resp:any) => {
    } )
  )
}

}
