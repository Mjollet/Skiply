import { Component, OnInit } from '@angular/core';
import { CAMPAIGN } from './mock-list';
import { Campaign } from 'src/app/shared/class/campaign';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  campaigns = CAMPAIGN;
  selectedCampaign: Campaign;

  isclick: boolean;

  constructor() { }


  ngOnInit() {
    this.selectedCampaign = null;
  }

  onSelect(campaign: Campaign) {
    this.selectedCampaign = campaign;
  }

  submit() {
    if (this.selectedCampaign) {

      this.isclick = true;

    } else {
      console.log('selectedCampaign not valid');
    }
  }

  selectedCampaignRaz() {
    this.selectedCampaign = null;
  }
}
