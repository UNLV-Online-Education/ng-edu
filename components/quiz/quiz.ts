import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'question-options',
  styles: [`
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    input:checked + label {
      font-weight: bold;
    }
    :host-context(.question.submitted) label.answer {
      font-style: italic;
    }
  `],
  template: `
    <ul>
      <li *ngFor="let option of data.answerChoices; let o = index">
        <input *ngIf="data.type === 'radio'" [id]="index + '-' + o.toString()" [attr.name]="index" type="radio" [(ngModel)]="data.input" [value]="option" [disabled]="data.submitted" required>
        <input *ngIf="data.type === 'checkbox'" [id]="index + '-' + o.toString()" [attr.name]="index + '-' + o.toString()" type="checkbox" [(ngModel)]="data.input[o]" [value]="option" [disabled]="data.submitted">
        <label [ngClass]="{'answer': isAnswer(option, data.answer, data.submitted)}" [attr.for]="index + '-' + o.toString()">{{option}}</label>
      </li>
    </ul>
  `
})
export class QuizQuestionOptions implements OnInit {

  @Input() data: any;

  @Input() index: string;

  constructor() { }

  ngOnInit() {
  }

  isAnswer(option, answers, questionSubmitted) {
    return this.markIfAnswer(option, answers, questionSubmitted);
  }

  markIfAnswer(option, answers, questionSubmitted) {
    if (questionSubmitted) {
      var optionIsAnswer = false;
      answers.forEach(function(answer) {
        if (option === answer) {
          optionIsAnswer = true;
        }
      });
      return optionIsAnswer;
    }
  }

  toggleCheck(option) {
    console.log(option);
  }

}

@Component({
  selector: 'oe-quiz',
  styles: [`
    .pure-button {
    	background-color: #2196F3;
    	color: #fff;
    }
    span.correct {
    	color: #4CAF50;
    }
    span.incorrect {
    	color: #F44336;
    }
    .pure-form fieldset {
    	border: 0;
    	padding: 0;
    }
    fieldset p,
    fieldset ul {
    	max-width: 48rem;
    }
      fieldset legend {
        margin-bottom: 1rem;
        font-weight: bold;
      }
    		fieldset div.question p.q-counter {
    			float: left;
    			width: 3.25rem;
    			padding-left: 1.25rem;
    		}
    	fieldset div.question div.q-body {
    			display: block;
    			overflow: hidden;
    		}
    		fieldset div.question.submitted p.q-counter {
    			padding-left: 0;
    		}
    			form.quiz fieldset div.question p.q-counter span.q-grade {
    				float: left;
    				width: 1rem;
    				margin-right: .25rem;
    			}
    			form.quiz fieldset div.question p.q-counter,
    			form.quiz fieldset div.question p.q-intro {
    				margin-top: 0;
    			}
    			form.quiz div.question p.feedback {
    				margin-top: 0;
    			}
  `],
  template: `
    <form class="pure-form quiz" (ngSubmit)="submitQuiz()" #f="ngForm">
      <fieldset *ngFor="let set of data.sets; let s = index;">
        <legend>{{set.intro}}</legend>
        <div class="question" [ngClass]="{'submitted': question.submitted}" *ngFor="let question of set.questions; let q = index;">
          <p class="q-counter">
            <span class="q-grade" *ngIf="question.submitted">
              <span class="glyph correct animated tada" *ngIf="question.correct">&#xf00c;</span>
              <span class="glyph incorrect animated wobble" *ngIf="!question.correct">&#xf00d;</span>
            </span>
            <span>{{q + 1}}.</span>
          </p>
          <div class="q-body">
            <p class="q-intro">
              {{question.question}}
            </p>
            <question-options *ngIf="question.answerChoices" [data]="question" [index]="s.toString() + '-' + q.toString()"></question-options>
            <p class="feedback" *ngIf="question.feedback">
              <span *ngIf="question.submitted"><strong>Feedback:</strong> <em>{{question.feedback}}</em></span>
            </p>
          </div>
        </div>
      </fieldset>
      <button class="pure-button" type="submit" *ngIf="!data.inputDisabled">Submit</button>
    </form>
    <button class="pure-button" *ngIf="data.inputDisabled" (click)="reload()">Retry</button>
    <p *ngIf="data.inputDisabled">
      {{data.feedback}} You got {{data.numberCorrect}} correct.
    </p>
  `,
  directives: [
    NgClass,
    QuizQuestionOptions
  ]
})
export class Quiz implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  submitQuiz() {
    let quizData = this.data;
    quizData.sets.forEach(function(set) {
      set.questions.forEach(function(question) {
        question.submitted = true;
        if (question.type === 'checkbox') {
          let checkboxCorrect:number = 0;
          let checkboxIncorrect:number = 0;
          // check to see if checked inputs are correct
          question.answer.forEach(function(answer:string) {
            Object.keys(question.input).forEach(function(key, index) {
              if (question.answerChoices[key] === answer) {
                checkboxCorrect++;
              }
            });
          });
          // check to see if checked inputs are incorrect
          Object.keys(question.input).forEach(function(key, index) {
            if (question.answer.indexOf(question.answerChoices[key]) === -1) {
              checkboxIncorrect++;
            }
          });
          // if all correct answers are checked and no checked inputs are incorrect, mark as correct
          if (checkboxIncorrect === 0 && checkboxCorrect === question.answer.length) {
            question.correct = true;
            quizData.numberCorrect++;
          }
        } else {
          question.answer.forEach(function(answer:string) {
            if (question.input === answer) {
              question.correct = true;
              quizData.numberCorrect++;
            }
          });
        }
      })
    });
    quizData.inputDisabled = true;
  }

  reload() {
    window.location.reload();
  }

}
