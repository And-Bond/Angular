import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: "show-contacts-comp",
  templateUrl: "./show_contacts_modal.component.html",
  styleUrls: ["./show_contacts_modal.component.css"],
})
export class ShowContactsModal implements OnInit, DoCheck {
  hidden: boolean = true;
  filter: string = "";
  nameActive: boolean = false;
  telActive: boolean = false;
  contacts = [];
  filteredContacts = []

  ngOnInit() {
    const error: any = JSON.parse(localStorage.getItem("contacts"));
    if (error === null) {
      this.contacts = [];
    } else {
      this.contacts = error;
    }
  }
  ngDoCheck() {
    const error: any = JSON.parse(localStorage.getItem("contacts"));
    if (error === null) {
      this.contacts = [];
    } else {
      this.contacts = error;
    }
    
  }

  onFilterBtnClick(P: string) {
    this.filter = P;
    switch (P) {
      case "name": {
        this.nameActive = !this.nameActive;
        this.telActive = false;
        break;
      }
      case "tel": {
        this.telActive = !this.telActive;
        this.nameActive = false;
        break;
      }
    }
    
  }

  onFilterInput(filterValue){
   this.filteredContacts = this.contacts.filter((contact) => {
    if(this.filter === 'name'){
      return contact.name.includes(filterValue)
    }else if(this.filter === 'tel'){
      return contact.tel.includes(filterValue)
    }
   })
    
  }

  onContactDelete(id: any) {
    let index:number;
    this.contacts.filter((contact,ind) => {
        if(!(id !== contact.id)){
            index = ind
        }
    return id !== contact.id;
    });
    
    this.contacts.splice(index,1)

    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }
}
