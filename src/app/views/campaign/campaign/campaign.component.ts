import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  isLinear = false;
  formGroupA: FormGroup;
  formGroupB: FormGroup;

  isNext: boolean;
  isType3: boolean;


  constructor(private date: MatDatepickerModule, private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.isNext = false;
    this.isType3 = true;

    this.formGroupA = this.formBuilder.group({
      campainNameCrtl: ['', Validators.required],
      typeSensor: ['sensorType3', Validators.required],
      response1: ['', Validators.required],
      response2: ['', Validators.required],
      response3: ['', Validators.required],
      response4: ['', Validators],
      response5: ['', Validators],
    });

    this.formGroupB = this.formBuilder.group({
      sensor: ['', Validators.required],
      calendar1: ['', Validators.required],
      calendar2: ['', Validators.required]
    });

    this.formGroupA.controls['typeSensor'].valueChanges.subscribe(value => {
      if (value === 'sensorType3') {
        this.isType3 = true;
        this.formGroupA.controls['response4'].clearValidators();
        this.formGroupA.controls['response4'].updateValueAndValidity();
        this.formGroupA.controls['response5'].clearValidators();
        this.formGroupA.controls['response5'].updateValueAndValidity();

      } else {
        this.isType3 = false;
        this.formGroupA.controls['response4'].setValidators([Validators.required]);
        this.formGroupA.controls['response5'].setValidators([Validators.required]);
      }
    });
  }



  submit() {
    if (this.formGroupA.valid) {
      this.isNext = true;
    } else {
      console.log('formGroupA not valid');
    }
  }
}

