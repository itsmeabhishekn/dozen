import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';

  constructor(private authservice: AuthService) { }
  isLoggedIn: boolean = false;

  login() {
    this.authservice.GoogleAuth()
    this.authservice.loggedIn.subscribe((result) => {
      this.isLoggedIn = result
    })
  }


}
