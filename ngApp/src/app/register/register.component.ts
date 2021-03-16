import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //new property
  registerUserData:any = {}
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
//method
  registerUser() {
    //call register user service parsing in the userdata
    this._auth.registerUser(this.registerUserData)
    // subscribe to the observalble that is returned
    .subscribe(
      res =>{ console.log(res)
        //key token value resToken from server into local storage
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )      
  }
}
