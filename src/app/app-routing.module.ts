import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './views/home/home.module#HomeModule' },

  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },

  { path: 'details', loadChildren: './views/details/details.module#DetailsModule' },

  { path: 'campaign', loadChildren: './views/campaign/campaign.module#CampaignModule' },

  { path: 'result', loadChildren: './views/result/result.module#ResultModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
