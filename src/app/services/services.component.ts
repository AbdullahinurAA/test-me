import { ConnectionService } from '../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

 // contact form
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
    }
  
    ngOnInit() {
  
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Book a meeting', label: 'Book a meeting' },
      { value: 'Request a quote', label: 'Request a quote' },
      { value: 'Other', label: 'Other' },
      ];
    }
  
    onSubmit() {
      this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      }, error => {
        console.log('Error', error);
      });
    }

}
