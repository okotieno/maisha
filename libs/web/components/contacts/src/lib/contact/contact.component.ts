import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule , FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'furaha-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  FormData = this.builder.group({
    Fullname: ['', [Validators.required]],
    Email: ['', [Validators.required, Validators.email]],
    Company: [''],
    Message: ['', [Validators.required]]
  })
  emailExists = false;
  constructor(private builder: FormBuilder,
    private contactService: ContactService){

  }

onSubmit(formData: any) {
  if (this.FormData.valid && !this.emailExists) {
    const formDataValue = this.FormData.value;
    this.contactService.PostMessage(formDataValue).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
  console.log(formData);
}
}

