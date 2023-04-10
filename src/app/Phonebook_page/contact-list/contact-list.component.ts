import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'contact-list',
    templateUrl:'./contact-list.component.html' ,
    styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent{
    @Input() contacts:Array<any> = []
    @Output() onContactDelete = new EventEmitter<string>

    onDelete(event: any){
        this.onContactDelete.emit(event.target.name)    
    }
}