import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  myForm : FormGroup;
  successMessage = '';
  constructor() { 
    this.myForm=new FormGroup({
      fullname : new FormControl(null,Validators.required),
      mobile : new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.email),
      password: new FormControl(null,Validators.required)
    });
    //private _myservice:AuthService
  }

  ngOnInit(): void {
  
  }

  isValid(controlName){
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  register(){
    localStorage.setItem('ufullname',this.myForm.value.fullname);
    localStorage.setItem('umobile',this.myForm.value.mobile);
    localStorage.setItem('uemail',this.myForm.value.email);
    localStorage.setItem('upassword',this.myForm.value.password);
    console.log(this.myForm.value);
      console.log(localStorage);
  
}
}
  // this._myservice.submitRegister(this.myForm.value)
    // .subscribe(
    //   data=>this.successMessage='New User Succesfully added!',
    //   error=> this.successMessage='Some Error'