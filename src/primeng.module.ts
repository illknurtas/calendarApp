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
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';

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
        ButtonModule,
        DividerModule,
        
    ],
    exports:[
        CommonModule,
        InputTextModule,
        PasswordModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        ButtonModule,
        DividerModule,
        PanelModule
    ]
})

export class PrimengModule {}