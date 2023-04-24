import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AddContactsModal} from './add_contacts_modal.component'


@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AddContactsModal],
    exports: [AddContactsModal]
})

export class AddContactsModule{}