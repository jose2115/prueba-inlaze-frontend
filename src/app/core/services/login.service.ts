import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.apiUrl + '/user';

constructor(
  private http: HttpClient,
) { 
}


login(formData:any){

  const url = `${this.baseUrl}/login`;
  return this.http.post(url, formData).pipe(
    tap( ( resp:any ) => {
  
    })
  );
  
}

}
