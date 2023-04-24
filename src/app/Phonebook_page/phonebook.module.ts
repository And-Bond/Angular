import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Phonebook} from './phonebook.component'

import {AddContactsModule} from './Add_contacts_modal/add_contacts_modal.module'
import {ShowContactsModule} from './Show_contacts_modal/show_contacts_modal.module'

@NgModule({
    imports: [BrowserModule,FormsModule,AddContactsModule,ShowContactsModule],
    declarations: [Phonebook],
    exports: [Phonebook]
})

export class PhonebookModule{}