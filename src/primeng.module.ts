import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from "primeng/button";

@NgModule({
    imports:[
        CommonModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        PaginatorModule,
        CheckboxModule,
        TableModule,
        DialogModule,
        RadioButtonModule,
        SelectButtonModule,
        ButtonModule
    ],
    exports:[
        CommonModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        ButtonModule
    ]
})

export class PrimengModule {}