import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router,ActivatedRoute, RouteConfigLoadEnd} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  successMessage = '';
  // router: any;
  validLogin: boolean;
  myLogin: FormGroup;
  constructor(private _router: Router, private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    });
    this.myLogin = new FormGroup({
      ulemail: new FormControl(null, Validators.email),    //ulemmial => userLoginemail
      ulpassword: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    // const eMail=this.myForm.value.email;
    // const pAssword=this.myForm.value.password;
  }
  ulogin(){
    console.log(this.myLogin.value);
    sessionStorage.setItem('ulemail', this.myLogin.value.ulemail);
    sessionStorage.setItem('ulpassword', this.myLogin.value.ulpassword);
    if(sessionStorage.getItem('ulemail')===localStorage.getItem('uemail')  && sessionStorage.getItem('ulpassword')===localStorage.getItem('upassword')){
      console.log("Login Success");
      this._router.navigate(['/chatbox'] );
    }
    else{
      console.log("Not a user");
    }
    console.log(sessionStorage);
  
  }
  alogin() {
    // console.log(this.myForm.value);
    sessionStorage.setItem('email', this.myForm.value.email);
    sessionStorage.setItem('password', this.myForm.value.password);
    if(sessionStorage.getItem('email')==='aakash@123'  && sessionStorage.getItem('password')==='vinove'){
      console.log("Login Success");
      this._router.navigate(['/admin'] );
    }
    else{
      console.log("Not an Admin");
    }
    console.log(sessionStorage);
    // let myObj = { userName: 'aakash', password: 'vinove' };
    // localStorage.setItem('key', JSON.stringify(myObj));
    
  //   if (this.myForm.value.email === "aakash" && this.myForm.value.password === "vinove") {
  //     this.validLogin = true;
  //     console.log("Login succesful");
  //     this.router.navigate = (['admin']);
  //   }
  //   else {
  //     this.validLogin = false;
  //     console.log('Login Error');
  //   }
 }
}