import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'contact-form',
    templateUrl:'./contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent{
    name:  '';
    number:  '';
    @Output() onSubmit = new EventEmitter<object>();

    submit(){
        const data:object = {
            name: this.name,
            number:this.number
        }   
        this.onSubmit.emit(data)
        this.name = ''
        this.number = ''
    }
}