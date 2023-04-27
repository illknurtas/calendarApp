import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private builder:FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router:Router){

    }
  registerForm = this.builder.group({
    id: this.builder.control("", Validators.compose([
      Validators.required, Validators.minLength(5)])),
    name: this.builder.control("", Validators.required),
    password: this.builder.control("", Validators.compose([Validators.required, 
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control("", Validators.compose([Validators.required, Validators.email])),
    isActive: this.builder.control(false)
  })

  proceedRegistration(){
    if(this.registerForm.valid){
      this.service.proceedRegister(this.registerForm.value).subscribe(res=>{
        this.toastr.success("Please contact admin for enable access","Successfully registered!");
        this.router.navigate([""]);
      })
    }
    else{
      this.toastr.warning("Control the data that you submitted!");
    }
  }
}
