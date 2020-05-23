import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ChatboxComponent } from './Chatbox/Chatbox.component';

const routes: Routes = [
  {
    path:'chatbox',
    component:ChatboxComponent
  },  {
    path:'admin',
    component:AdminComponent
  },

  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdminComponent,HomeComponent,ChatboxComponent]