import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormAddComponent } from '../app/pages/student/form-add/form-add.component';
import { ListComponent } from '../app/pages/student/list/list.component';

const routes: Routes = [
  {
    path : 'subject',
    component : ListComponent
  },
  {
    path : 'student/add',
    component : FormAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
