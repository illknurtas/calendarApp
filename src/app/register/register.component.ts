import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  constructor( private builder:FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router:Router){
      this.registerForm =this.builder.group({
          id: new FormControl("",Validators.compose([
            Validators.required, Validators.minLength(5)
          ])),
          name: new FormControl <string>("",Validators.required),
          password: new FormControl("", Validators.compose([Validators.required,
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}')])),
          email: new FormControl ("",Validators.compose([Validators.required, Validators.email]))
        }
      )
    }

    ngOnInit() {
        
  }

  proceedRegistration(){
    if(this.registerForm.valid){
      this.service.proceedRegister(this.registerForm.value).subscribe(res=>{
        this.toastr.success("Please contact admin for enable access","Successfully registered!");
        this.router.navigate(["/login"]);
      })
    }
    else{
      this.toastr.warning("Control the data that you submitted!");
    }
  }
}
