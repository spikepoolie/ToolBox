import { Component, OnInit, HostListener } from '@angular/core';
import { TeslaRestService } from './../../services/tesla-rest.service';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { trigger, state, transition, style, animate, group } from '@angular/animations';

@Component({
  selector: 'tesla-poll-display',
  templateUrl: './poll-display.component.html',
  styleUrls: ['./poll-display.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateX(-90%)' }),
        animate(300)
      ]),
      transition(':leave', [
        group([
          animate(700, style({
            transform: 'translate(180%)'
          })),
          animate(300, style({
            opacity: 0
          }))
        ])
      ])
    ]),
    trigger('scaleForm', [
      transition(':enter', [
        style({ transform: 'scale(1.1)' }),
        animate(1000)
      ]),
      transition(':leave', [
        animate(0, style({ transform: 'scale(1.0)' }))
      ])
    ]),
    trigger('fadeInAnimation1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1500)
      ]),
      transition(':leave', [
        animate(0, style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class PollDisplayComponent implements OnInit {
  answers: any = [];
  pollid;
  mydata: any = [];
  myAnswersLegend = [];

  public doughnutChartLabels: string[] = [''];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  logosource = 'https://toolbox.teslamotors.com/assets/images/tesla_flag.png';

  // public chartOptions: any = {
  //   pieceLabel: {
  //     render: function (args) {
  //       const label = args.doughnutChartLabels,
  //         value = args.mydata;
  //       return label + ': ' + value;
  //     }
  //   }
  // };

  constructor(
    public rest: TeslaRestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pollid = localStorage.getItem('questionid');

    // rest call to get the poll answers
    this.rest.getAnswers('get_poll_answers.php?pollid=' + this.pollid).subscribe((data: {}) => {
      this.answers = data;

      // populates the chart data
      this.answers.forEach((element) => {
        this.myAnswersLegend.push(element.poll_answer);
        this.mydata.push(Number(element.total));
      });
      this.doughnutChartData = this.mydata;
      setTimeout(() => {
        this.doughnutChartLabels = this.myAnswersLegend;
      });
    });

  }

  // helpers functions if more functionality gets added to the chart

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
