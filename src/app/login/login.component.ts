import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
          text: new FormControl<string | null>(null),
          password: new FormControl()
        });
    }
}