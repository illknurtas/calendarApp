import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeekComponent } from './week/week.component';

const routes: Routes = [
  {path:" ", component:LoginComponent},
  {path:"week", component:WeekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
