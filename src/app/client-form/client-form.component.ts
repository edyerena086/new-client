import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

	clientForm : any;

  constructor() { }

  ngOnInit(): void {
  	this.clientForm = new FormGroup({
  	  legalName: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      comercialName: new FormControl('', [Validators.required]),
      legalType: new FormControl('', [Validators.required]),
      contactName: new FormControl('', [Validators.required]),
      contactLastName: new FormControl('', [Validators.required]),
      contactSecondLastName: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [Validators.required]),
      contactCellphone: new FormControl('', [Validators.required])
  	});
  }

}
