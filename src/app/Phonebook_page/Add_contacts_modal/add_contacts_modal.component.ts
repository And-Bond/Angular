import { nanoid } from "nanoid";
import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { Observable, fromEvent } from "rxjs";

@Component({
  selector: "add-contacts-comp",
  templateUrl: "./add_contacts_modal.component.html",
  styleUrls: ["add_contacts_modal.component.css"],
})
export class AddContactsModal implements OnInit, DoCheck {
  hidden: boolean = true;
  contacts = [];

  contacts$ : Observable<Array<any>>

  errorMsg = "";

//   @ViewChild("submitBtn")
//   submitBthEl: ElementRef;

//   submitEvent$: Observable<Event>;

  ngOnInit(): void {
    const error: any = JSON.parse(localStorage.getItem("contacts"));
    if (error === null) {
      this.contacts = [];
    } else {
      this.contacts = error;
    }
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
    const dup = this.contacts.find(({name}) => {
        return conName === name
    })
    if(dup){
        this.errorMsg = 'This contact is already exist!'
        return;
    }
    this.errorMsg = ''
    this.contacts = [...this.contacts,{name:conName,tel:conTel,id:nanoid()}]
    localStorage.setItem('contacts',JSON.stringify(this.contacts))
  }
}
