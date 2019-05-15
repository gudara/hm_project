import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/student/list/list.component';
import { FormAddComponent } from './pages/student/form-add/form-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
