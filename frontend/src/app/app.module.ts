import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { from } from 'rxjs';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [AuthService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
