import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PhonebookModule } from "./Phonebook_page/phonebook.module";
import { Phonebook } from './Phonebook_page/phonebook.component'
import { MainComponent } from "./Main_page/Mainpage.component";

import { NavComponent } from "./Nav/nav.component";

import { StoreModule } from '@ngrx/store';
import {ContactsReducer} from '../ngrx/contacts.reducer'

const appRoutes: Routes = [
    {path: "main", component: MainComponent },
    {path: 'phonebook', component: Phonebook}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),StoreModule.forRoot({contacts: ContactsReducer}) ,BrowserModule, FormsModule, PhonebookModule],
  declarations: [AppComponent, NavComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
