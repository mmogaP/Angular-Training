import { Component } from '@angular/core';
interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model = {
    name: "",
    checkAdult: false,
    department: "",
    comment: "..."
  };

  onSubmit(values: any): void {
    console.log('Form values', values);
  }

}
