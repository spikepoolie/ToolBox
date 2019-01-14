import { TeslaRestService } from './../../services/tesla-rest.service';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, group } from '@angular/animations';


@Component({
  selector: 'tesla-poll-request',
  templateUrl: './poll-request.component.html',
  styleUrls: ['./poll-request.component.scss'],
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
export class PollRequestComponent implements OnInit {

  title = 'tesla';
  questions: any = [];
  arr: any[] = [];
  count = 0;
  url = '';
  hasAnswerSelected = true;
  logosource = 'https://toolbox.teslamotors.com/assets/images/tesla_flag.png';

  constructor(
    public rest: TeslaRestService,
    private routers: Router
  ) {}

  ngOnInit() {
    this.getQuestionsCount();
  }

  getQuestion(questionid: Number) {
    this.questions = [];
    this.rest.getQuestion('get_question.php?questionid=', questionid).subscribe((data: {}) => {
      this.questions = data;
    });
  }

  getQuestionsCount = () => {
    this.rest.getQuestionsCount('get_questions_count.php').subscribe((data: {}) => {
      this.questions = data;
      this.count = data[0].rowcount;
      const randomQuestionGroupId = Math.floor(Math.random() * this.count) + 1;
      this.getQuestion(randomQuestionGroupId);
    });
  }

  submitAnswer(frm: NgForm) {
    this.arr = frm.value;
    if (frm.value.pool_answers === null) {
      this.hasAnswerSelected = false;
    } else {
      this.hasAnswerSelected = true;
      const pollAnswer = frm.value.pool_answers.split('_');
      localStorage.setItem('questionid', pollAnswer[0]);
      localStorage.setItem('answerid', pollAnswer[1]);
      this.rest.sendAnswer('save_answer.php?answer=', frm.value.pool_answers).subscribe((data: {}) => {
        this.routers.navigate(['/polldisplay']);
      });
    }
  }
}
