import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign/campaign.component';



@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule

  ]
})
export class CampaignModule { }
