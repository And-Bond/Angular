import { Component } from "@angular/core";
import {submit,deleteContact,input}  from './functions/index'

@Component({
    selector: 'phonebook-comp',
    templateUrl: './phonebook.component.html',
    styleUrls: ['./phonebook.component.css']
})

export class Phonebook{
    contacts: Array<any> = [];
  filteredContacts: Array<any> = this.contacts;
  filterValue: string = "";

  ngOnInit(){
    const localContacts = JSON.parse(localStorage.getItem("contacts"))
    if(localContacts === null){
      return
    }
    this.filteredContacts = localContacts
    this.contacts = localContacts
  }

  onSubmitted({ name, number }){
    submit(this,{ name, number})
  } 
  
  onContactDelete(id: string) {
    deleteContact(this,id)
  }
  onInput() {
    input(this)
  }
}