import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'add', component: DataEditComponent },
  { path: 'table', component: DatatableComponent }
]

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
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
