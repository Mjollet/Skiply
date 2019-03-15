import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  FormGroupA: FormGroup;


  isNext: boolean;

  constructor(private date: MatDatepickerModule, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isNext = false;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],

      sensor: ['', Validators.required],

      response1: ['', Validators.required],
      response2: ['', Validators.required],
      response3: ['', Validators.required],
      response4: ['', Validators],
      response5: ['', Validators],

      calendar1: ['', Validators.required],
      calendar2: ['', Validators.required]
    });

  }

  submit() {
    if (this.firstFormGroup.valid) {

      this.isNext = true;

    } else {
      console.log('firstFormGroup not valid');
    }

  }

}

