import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    console.log(this.form);
    this._router.navigate(['/home']);
  }

}
