import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  chartTmp = [];
  constructor() { }

  ngOnInit() {

    this.chartTmp = new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: {
        labels: ['Satisfied', 'Don\'t care', 'Dissatisfied'],
        datasets: [{
          data: [5, 3, 2],
          backgroundColor: ['rgba(73,232,62, 1)', 'rgba(248, 240, 89, 1)', 'rgba(246, 35, 35, 1)'],
          label: 'BUMS/J'
        }]
      },
    });

  }


}
