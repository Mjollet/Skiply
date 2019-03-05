import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { PeriodComponent } from './period/period.component';
import { BoitierComponent } from './boitier/boitier.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [PeriodComponent, BoitierComponent, QuestionComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
