import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {ShowContactsModal} from './show_contacts_modal.component'


@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [ShowContactsModal],
    exports: [ShowContactsModal]
})

export class ShowContactsModule{}