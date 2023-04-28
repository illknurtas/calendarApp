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
    }
  }
}