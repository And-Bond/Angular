import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }   from './app.component';
import {PhonebookModule} from './Phonebook_page/phonebook.module'

import {NavComponent} from './Nav/nav.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule, PhonebookModule ],
    declarations: [ AppComponent,NavComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }