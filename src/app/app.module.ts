import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }   from './app.component';
// import {ContactListComponent} from './Phonebook/contact-list/contact-list.component'
import {PhonebookModule} from './Phonebook_page/phonebook.module'

@NgModule({
    imports:      [ BrowserModule, FormsModule, PhonebookModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }