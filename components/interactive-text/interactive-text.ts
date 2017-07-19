import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizModule } from '../quiz/quiz';

@Component({
  selector: 'oe-interactive-text',
  template: `
    <span class="group" *ngFor="let exercise of data; let i = index;">
      <span [innerHtml]="exercise.before"></span>
      <span class="clickable" [ngClass]="{'highlight': isHighlighted(exercise), 'completed': exercise.completed}">
        <span (click)="clickable(exercise, i)">{{exercise.clickable}}</span>
        <span class="choices animated fadeInRight" *ngIf="exercise.showChoices">
          <nav>
            <button class="btn-close" (click)="closeAllPrompts()">
              <div class="ex">
                <span class="line forward"></span>
                <span class="line back"></span>
              </div>
            </button>
          </nav>
          <oe-quiz [data]="exercise.oeQuiz" *ngIf="exercise?.oeQuiz" (completed)="completed($event)"></oe-quiz>
        </span>
      </span>
      <span [innerHtml]="exercise.after"></span>
    </span>
    <p class="error-counter">
      <span>{{correctedExercises(data)}} out of {{data.length}} completed</span>
    </p>
  `,
  styles: [`
    .group {
      cursor: pointer;
    }

    p.error-counter span {
      font-weight: bold;
      border-radius: 2px;
    }

    span.correction {
      border-radius: 2px;
    }

    span.clickable {
      position: relative;
      display: inline-block;
      border-radius: 2px;
    }

    span.clickable.highlight {
      background-color: #FFF9C4;
    }

    span.clickable.highlight.completed {
      background-color: #C8E6C9;
    }

    span.choices {
      border-radius: 2px;
      display: inline-block;
      background-color: rgba(255, 255, 255, .9);
      position: fixed;
      padding: 1rem;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      max-width: 30rem;
    }

    span.choices:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px 8px 0;
      border-style: solid;
      border-color: #fff transparent;
      display: block;
      width: 0;
    }

    span.choices nav {
      text-align: right;
    }

      .btn-close {
        background: none;
        border: none;
        padding: 0;
      }

      .btn-close:focus {
        outline:0;
      }

        .btn-close .ex {
          height: 2rem;
          width: 2rem;
          position: relative;
          transition: transform .1s linear;
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .btn-close:hover .ex {
          transition: transform .1s linear;
          -ms-transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
        }

      .btn-close .ex .line {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        height: 1px;
        width: 100%;
        background-color: #222;
        transition: background-color .1s linear;
      }

      .btn-close:hover .ex .line {
        background-color: #00BCD4;
        transition: background-color .1s linear;
      }

      .btn-close .ex .line.forward {
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
  `]
})
export class InteractiveText implements OnInit {

  @Input() data:any;

  constructor() {}

  ngOnInit() {
  }

  closeAllPrompts() {
    this.data.forEach((group: any) => {
      group.showChoices = false;
    });
  }

  clickable(exercise: any, i: any) {
    this.closeAllPrompts();
    if (exercise.oeQuiz) {
      exercise.showChoices = true;
      exercise.oeQuiz.exercise = i;
    } else {
      exercise.completed = true;
    }
  }

  isHighlighted(exercise :any) {
    if (exercise.completed && exercise.states.complete.highlight) {
      return true;
    } else if (!exercise.completed && exercise.states.incomplete.highlight) {
      return true;
    } else {
      return false;
    }
  }

  isCorrected(exercise: any) {
    if (exercise.completed) {
      return true;
    }
  }

  correctedExercises(exercises: any) {
    var count: number = 0;
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].completed) {
        count++;
      }
    }
    return count;
  }

  completed(event: any) {
    if (event.quizData.numberCorrect === event.questionsTotal) {
      this.data[event.quizData.exercise].completed = true;
    }
  }

}

@NgModule({
    imports: [CommonModule, QuizModule],
    exports: [InteractiveText],
    declarations: [InteractiveText]
})
export class InteractiveTextModule { }
