import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {


  public formularyContact: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularyContact = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required, Validators.minLength(5)]],
      message: ["", [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
      
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.formularyContact.value);
  }

  hasError(field: string, typeError: any) {
    return this.formularyContact.get(field)?.hasError(typeError);
  }
}
