import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { ColspanComponent } from './components/colspan/colspan.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColspanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
