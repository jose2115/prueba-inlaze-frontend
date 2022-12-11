import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  view:boolean = false
  constructor(
    private _authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onView(){

    this.view = !this.view
  }

  logout () {
    this._authService.logOut()
  }

}
