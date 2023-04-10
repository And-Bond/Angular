import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Phonebook} from './phonebook.component'

import {ContactListComponent} from './contact-list/contact-list.component'
import {ContactFormComponent} from './contact-form/contact-form.component'

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [Phonebook,ContactListComponent,ContactFormComponent],
    exports: [Phonebook]
})

export class PhonebookModule{}