import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  constructor( private auth:AuthService) 
  {
    auth.handleAuthentication();
  }

  login()
  {
    this.auth.login();
  }

  salir()
  {
    this.auth.logout();
  }
}
