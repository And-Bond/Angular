import { nanoid } from "nanoid";
import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { contactsWrite } from "src/ngrx/contacts.actions";
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: "add-contacts-comp",
  templateUrl: "./add_contacts_modal.component.html",
  styleUrls: ["add_contacts_modal.component.css"],
})
export class AddContactsModal implements OnInit, DoCheck {
  hidden: boolean = true;
  contacts = [];

  contacts$: Observable<Array<any>>;

  errorMsg = "";

  //   @ViewChild("submitBtn")
  //   submitBthEl: ElementRef;

  //   submitEvent$: Observable<Event>;

  constructor(private store: Store<{ contacts: Array<any> }>) {

    const error: any = JSON.parse(localStorage.getItem("contacts"));
    if (error === null) {
      alert("Error Happened");
    } else {
      this.store.dispatch(contactsWrite());
    }

    console.log(error);
    
    
    this.contacts$ = store.select("contacts");
    console.log(this.contacts$);
    setTimeout(_ => {
      console.log(this.contacts$);
    },1000)
  }

  ngOnInit(): void {
    // console.log(this.contacts$.subscribe((e) => console.log(e)));
  }

  //   ngAfterViewInit() {
  //     this.submitEvent$ = fromEvent(this.submitBthEl?.nativeElement, "submit");

  //     this.submitEvent$.subscribe((e) => {
  //       console.log("2");
  //     });
  //   }

  ngDoCheck() {
    const error: any = JSON.parse(localStorage.getItem("contacts"));
    if (error === null) {
      this.contacts = [];
    } else {
      this.contacts = error;
    }
  }

  onSubmit(conName, conTel) {
    const dup = this.contacts.find(({ name }) => {
      return conName === name;
    });
    if (dup) {
      this.errorMsg = "This contact is already exist!";
      return;
    }
    // if(this.contacts.indexOf({name: conName}) > -1){
    //   this.errorMsg = "This contact is already exist!";
    //   return; 
    // }
    this.errorMsg = "";
    this.contacts = [
      ...this.contacts,
      { name: conName, tel: conTel, id: nanoid() },
    ];
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }
}
