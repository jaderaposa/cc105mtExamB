import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { AppRoutingModule } from './app-routing.module';


const routes: Routes =[]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DatatableComponent,
    DataEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
