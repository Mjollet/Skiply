import { Component, OnInit } from '@angular/core';
import { CAMPAIGN } from './mock-list';
import { Campaign } from 'src/app/shared/class/campaign';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  campaigns = CAMPAIGN;
  selectedCampaign: Campaign;

  isclick: boolean;

  // Initialiser les boutons
  constructor(private router: Router) { }


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
  // Les bouttons!!!

  selectedCampaignRaz() {
    this.selectedCampaign = null;
  }

  resultgate() {
    // this.appelVersLeBackRecupResult(idcampaign) => Resultat
    // this.router.navigate(['results']);
    this.router.navigate(['results']);

  }
}
