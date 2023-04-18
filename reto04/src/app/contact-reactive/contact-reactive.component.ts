import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit{ 
  contactForm!: FormGroup;
  name!: string;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
    this.contactForm = this.initForm();
  }

  onSubmit():void {
    console.log('Form');
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', Validators.required],
      department: [''],
      comment: ['', Validators.required],
    })
  }

}
