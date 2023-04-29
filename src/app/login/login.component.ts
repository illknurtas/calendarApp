import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
<<<<<<< HEAD

  constructor (private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router) {
    this.loginForm =this.builder.group({
        user: new FormControl("", Validators.required),
        password: new FormControl("",Validators.required)
    });
  }
  userData:any;

  ngOnInit() {}

  proceedLogin(){
    if(this.loginForm.valid){
      this.service.getByCode(this.loginForm.value.user).subscribe((res: any) =>{
        this.userData = res[0];
        console.log(this.userData);
        if(this.userData.password === this.loginForm.value.password){
          if(this.userData.isActive){
            sessionStorage.setItem("username", this.userData.id);
            this.router.navigate(["/week"]);
          }
          else{
            this.toastr.error("Inactive user!");
          } 
        }
        else{
          this.toastr.error("Control your username and password");
        }
      }, err => {
        this.toastr.error("User not found!");
      })    
=======

  constructor (private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router) {
    this.loginForm =this.builder.group({
        name: new FormControl("", Validators.required),
        password: new FormControl("",Validators.required)
    });
  }
  name:any;

  ngOnInit() {}

  proceedLogin(){
    if(this.loginForm.valid){
      this.service.getByCode(this.loginForm.value.username).subscribe(res=>{
        this.name = res;
        console.log(this.name);
        this.toastr.success(`Welcome`);
        this.router.navigate(["/week"]);
      })
      
    }
    else{
      this.toastr.warning("Control the data that you submitted!");
>>>>>>> 7e2eaad4d2e1389be16c0d35ffd684e70b62743e
    }
  }
}