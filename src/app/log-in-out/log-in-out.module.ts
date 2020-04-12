import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing/login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginOutButtonComponent } from './login-out-button/login-out-button.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, LoginOutButtonComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LoginRoutingModule, LoginOutButtonComponent]
})
export class LogInOutModule { }
