import { Component, OnInit, AfterContentInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  chartTmp1 = [];
  chartTmp2 = [];
  constructor() { }

  ngOnInit() {

    this.chartTmp1 = new Chart(document.getElementById('myChart'), {
      type: 'pie',
      data: {
        labels: ['Satisfied', 'Don\'t care', 'Dissatisfied'],
        datasets: [{
          data: [5, 3, 2],
          backgroundColor: ['rgba(73,232,62, 1)', 'rgba(248, 240, 89, 1)', 'rgba(246, 35, 35, 1)'],
          label: 'BUMS/J'
        }]
      },
      options: {
        onResize: 0,
        responsive: true,
        maintainAspectRatio: false
      }
    });



    this.chartTmp2 = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels: ['janvier', 'fevrier', 'mars', 'avril'],
        datasets: [{
          label: 'Satisfied',
          data: [12, 23, 42, 12],
          backgroundColor: 'rgba(1, 22, 64, 0.05)',
          borderColor: 'rgba(73,232,62, 1)',
          borderWidth: 1

        }, {
          label: 'Don\'t care',
          data: [55, 120, 75, 42],
          backgroundColor: 'rgba(1, 22, 64, 0.05)',
          borderColor: 'rgba(248, 240, 89, 1)',
          borderWidth: 1

        }, {
          label: 'Dissatisfied',
          data: [22, 233, 52, 72],
          backgroundColor: 'rgba(1, 22, 64, 0.05)',
          borderColor: 'rgba(246, 35, 35, 1)',
          borderWidth: 1
        }]
      },
      // Changer de taille, aller dans la doc
      options: {
        scales: {
          // xAxes: [{
          //   type: 'time',
          //   time: {
          //     displayFormats: {
          //       quarter: 'h:mm a',
          //     }
          //   }
          // }],

          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        },
        tooltips: {
          mode: 'index',
          intersect: false
        }
      }
    });
  }


}

