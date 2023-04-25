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
        SelectButtonModule
    ],
    exports:[
        CommonModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule
    ]
})

export class PrimengModule {}