import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginService } from "app/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  roles = [{'role': 'Patient'} , 
          {'role': 'Doctor'}];
  constructor(private loginServive: LoginService,private router: Router) { }

  ngOnInit() {
  }

  login() {
    let Issuccess = false;

    Issuccess = this.loginServive.login(this.model);

    if (Issuccess) {
      console.log(localStorage.getItem('currentUser'));
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please Enter valid credentials');
      console.log(`isSuccess ${Issuccess}`);
    }
    
  }



}
