import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'question-options',
  styles: [`
    ul {
      list-style-type: none;
      padding-left: 0;
    }

      ul li {
        margin-bottom: .5rem;
      }

        ul li input {
          float: left;
          margin: .375rem .25rem 0 0;
        }

        ul li label {
          margin: 0;
          display: block;
          overflow: hidden;
        }

    input:checked + label {
      font-weight: bold;
    }

    :host-context(.question.submitted) label.answer {
      font-style: italic;
      color: #4CAF50;
    }
  `],
  template: `
    <ul>
      <li *ngFor="let option of data.answers; let o = index">
        <input
          *ngIf="isRadio(data)"
          type="radio"
          [id]="inputId(o)"
          [name]="inputName(data, o)"
          [(ngModel)]="data.input"
          [value]="option.text"
          [disabled]="data.submitted"
        >
        <input
          *ngIf="isCheckbox(data)"
          type="checkbox"
          [id]="inputId(o)"
          [name]="inputName(data, o)"
          [(ngModel)]="option.checked"
          [value]="option.text"
          [disabled]="data.submitted"
        >
        <label
          [ngClass]="{'answer': isAnswer(option)}"
          [attr.for]="labelFor(o)"
        >
          {{option.text}}
        </label>
      </li>
    </ul>
  `
})
export class QuizQuestionOptions implements OnInit {

  @Input() data: any;

  @Input() questionIndex: string;

  constructor() { }

  ngOnInit() {
  }

  inputId(optionIndex: string) {
    return this.questionIndex + '-' + optionIndex;
  }

  inputName(question: any, optionIndex: string) {
    if (this.inputType(question) === 'checkbox') {
      return this.questionIndex + '-' + optionIndex;
    } else if (this.inputType(question) === 'radio') {
      return this.questionIndex;
    }
  }

  inputType(question: any) {
    let answerCount: number = 0;
    for (let answer of question.answers) {
      if (answer.correct) {
        answerCount++;
      }
    }
    if (answerCount != 1 || question.type === 'checkbox') {
      return 'checkbox';
    } else {
      return 'radio';
    }
  }

  isAnswer(option: any) {
    if (this.data.submitted) {
      if (option.correct) {
        return true;
      }
      return false;
    }
  }

  isCheckbox(question: any) {
    if (this.inputType(question) === 'checkbox') {
      return true;
    }
  }

  isRadio(question: any) {
    if (this.inputType(question) === 'radio') {
      return true;
    }
  }

  labelFor(optionIndex: string) {
    return this.questionIndex + '-' + optionIndex;
  }

}

@Component({
  selector: 'edu-quiz',
  styles: [`
    .edu-quiz-wrapper > nav {
      display: none;
    }

    .edu-quiz-wrapper > .tab-body {
      display: block;
    }

    .edu-quiz-wrapper.finished > nav {
      display: block;
      border-bottom: 2px solid #e5e5e5;
    }

    .edu-quiz-wrapper.finished > nav button {
      opacity: .7;
      margin-right: 2px;
    }

    .edu-quiz-wrapper.finished > nav button.active {
      opacity: 1;
    }

    .edu-quiz-wrapper.finished > .tab-body {
      display: none;
    }

    .edu-quiz-wrapper.finished > .tab-body.active {
      display: block;
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
    <div class="edu-quiz-wrapper" [ngClass]="{'finished': isSetBySetFinished()}">
      <nav>
        <button class="pure-button edu-quiz-tab" *ngFor="let tab of tabs; let t = index;" [ngClass]="{'active': tab.active}" (click)="setActiveTab(t)">{{tab.name}}</button>
      </nav>
      <section class="tab-body" [ngClass]="{'active': isActiveTab(1)}">
        <form class="pure-form quiz" (ngSubmit)="submitQuiz()" #f="ngForm">
          <ng-container *ngFor="let set of data.sets; let s = index;">
            <fieldset *ngIf="isSetActive(s)">
              <legend>{{set.intro}}</legend>
              <div class="question" [ngClass]="{'submitted': question.submitted}" *ngFor="let question of set.questions; let q = index;">
                <p class="q-counter">
                  <span class="q-grade" *ngIf="question.submitted">
                    <span class="fa fa-check correct animated tada" *ngIf="question.correct"></span>
                    <span class="fa fa-close incorrect animated wobble" *ngIf="!question.correct"></span>
                  </span>
                  <span>{{q + 1}}.</span>
                </p>
                <div class="q-body">
                  <p class="q-intro">
                    {{question.question}}
                  </p>
                  <question-options *ngIf="question.answers" [data]="question" [questionIndex]="questionIndex(s, q)"></question-options>
                  <p class="feedback" *ngIf="question.feedback">
                    <span *ngIf="question.submitted"><strong>Feedback:</strong> <em>{{question.feedback}}</em></span>
                  </p>
                </div>
              </div>
            </fieldset>
          </ng-container>
          <nav *ngIf="isNotOnLastSet()">
            <button class="pure-button" type="button" (click)="changeActive('next')">Next</button>
          </nav>
          <p *ngIf="isReadyForSubmission()">
            <button class="pure-button" type="submit" *ngIf="!data.inputDisabled">Submit</button>
          </p>
        </form>
      </section>
      <section class="tab-body" [ngClass]="{'active': isActiveTab(0)}" *ngIf="data.inputDisabled">
        <p>
          You got {{data.numberCorrect}} correct.
        </p>
        <p>
          {{data.feedback}}
        </p>
        <p>
          <button type="button" class="pure-button" (click)="reload()">Retry</button>
        </p>
      </section>
    </div>
  `
})
export class Quiz implements OnInit {

  @Input() data: any;

  @Output() completed: EventEmitter<any> = new EventEmitter<any>();

  index: number = 0;

  tabs: any = [
    {
      name: "Results",
      active: true
    },
    {
      name: "Questions"
    }
  ];

  total: number = 0;

  constructor() { }

  ngOnInit() {
    this.data.numberCorrect = 0;
    if (this.data.oneSetAtATime) {
      this.setActive(this.index);
    }
  }

  changeActive(direction: string) {
    if (direction === 'next') {
      this.setActive(this.index + 1);
    } else {
      this.setActive(this.index - 1);
    }
  }

  countTotalQuestions() {
    let total:number = 0;
    for (let set of this.data.sets) {
      for (let question of set.questions) {
        total++;
      }
    }
    return total;
  }
  
  isActiveTab(index: number) {
    if (
      this.isSetBySetFinished()
      && this.tabs[index].active
    ) {
      return true;
    }
  }

  isNotOnLastSet() {
    if (
      this.data.oneSetAtATime &&
      this.index != this.data.sets.length - 1
    ) {
      return true;
    }
  }

  isSetBySetFinished() {
    if (this.data.oneSetAtATime) {
      for (let set of this.data.sets) {
        for (let question of set.questions) {
          if (!question.submitted) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }

  isReadyForSubmission() {
    if (
      !this.isNotOnLastSet() ||
      !this.data.oneSetAtATime
    ) {
      return true;
    }
  }

  isSetActive(index: number) {
    if (
      !this.data.oneSetAtATime ||
      this.isSetBySetFinished() ||
      this.data.sets[index].active
    ) {
      return true;
    }
  }

  inputType(question: any) {
    let answerCount: number = 0;
    for (let answer of question.answers) {
      if (answer.correct) {
        answerCount++;
      }
    }
    if (answerCount != 1 || question.type === 'checkbox') {
      return 'checkbox';
    } else {
      return 'radio';
    }
  }

  isCheckbox(question: any) {
    if (this.inputType(question) === 'checkbox') {
      return true;
    }
  }

  isRadio(question: any) {
    if (this.inputType(question) === 'radio') {
      return true;
    }
  }

  questionIndex(setIndex: number , questionIndex: number) {
    return setIndex + '-' + questionIndex;
  }

  reload() {
    this.data.numberCorrect = 0;
    for (let set of this.data.sets) {
      for (let question of set.questions) {
        delete question.input;
        question.submitted = false;
        question.correct = false;
        for (let answer of question.answers) {
          delete answer.checked;
        }
      }
    }
    this.data.inputDisabled = false;
    this.setActive(0);
  }

  setActive(index: number) {
    for (let set of this.data.sets) {
      set.active = false;
    }
    this.index = index;
    this.data.sets[index].active = true;
  }

  setActiveTab(index: number) {
    for (let tab of this.tabs) {
      tab.active = false;
    }
    this.tabs[index].active = true;
  }

  submitQuiz() {
    for (let set of this.data.sets) {
      for (let question of set.questions) {
        question.submitted = true;
        if (this.isCheckbox(question)) {
          let incorrect: number = 0;
          let missed: number = 0;
          // check to see if checked inputs are correct
          for (let answer of question.answers) {
            if (answer.checked && !answer.correct) {
              incorrect++;
            }
            if (answer.correct && !answer.checked) {
              missed++;
            }
          }
          // if there are no incorrect or missed checks, mark as correct
          if (
            incorrect === 0 &&
            missed === 0
          ) {
            question.correct = true;
            this.data.numberCorrect++;
          }
        } else if (this.isRadio(question)) {
          for (let answer of question.answers) {
            if (
              answer.correct &&
              question.input === answer.text
            ) {
              question.correct = true;
              this.data.numberCorrect++;
            }
          }
        } else {
          console.log('Data does not conform to any question types! Make sure you have selected at least one correct answer for each question.')
        }
      }
    }
    this.data.inputDisabled = true;
    this.completed.emit({
      questionsTotal: this.countTotalQuestions(),
      quizData: this.data
    });
  }

}

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [Quiz],
    declarations: [Quiz, QuizQuestionOptions]
})
export class QuizModule { }
