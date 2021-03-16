import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //property initialised with empty object
  loginUserData:any = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    //calling service, parsing in userdata
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      //either response or error
      res =>{ console.log(res)
        //key token value resToken from server into local storage
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

}
