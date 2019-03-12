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

  isNext: boolean;

  constructor(private date: MatDatepickerModule, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isNext = false;

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      calendar1: ['', Validators.required],
      calendar2: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      sensor: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      response1: ['', Validators.required],
      response2: ['', Validators.required],
      response3: ['', Validators.required],
      response4: ['', Validators],
      response5: ['', Validators]
    });



  }

  submit() {
    if (this.firstFormGroup.valid) {
      if (this.secondFormGroup) {
        if (this.thirdFormGroup) {
          if (this.fourthFormGroup) {
            this.isNext = true;
          } else {
            console.log('fourthFormGroup not valid');
          }
        } else {
          console.log('thirdFormGroup not valid');
        }
      } else {
        console.log('secondFormGroup not valid');
      }
    } else {
      console.log('firstFormGroup not valid');
    }
  }

}
