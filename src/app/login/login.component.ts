import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor (private builder: FormBuilder){}
    ngOnInit() {
        this.loginForm =this.builder.group({
          text: new FormControl<string | null>(null),
          password: new FormControl()
        });
    }
}