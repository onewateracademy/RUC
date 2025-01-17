import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: ContactComponent
    }
    ]

@NgModule({
  declarations: [ContactComponent],
  exports:[ContactComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,
  FormsModule,
  ReactiveFormsModule
  ]
})
export class ContactModule { }
