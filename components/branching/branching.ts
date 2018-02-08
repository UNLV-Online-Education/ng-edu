import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-branching',
  template: `
    <section>
      <div>
        <h4>{{node.data.title}}</h4>
        <p>{{node.data.text}}</p>
        <div [innerHtml]="node.data.html"></div>
        <img class="graphic" [src]="node.data.image">
      </div>
      <ul class="choices">
        <li class="choice" *ngFor="let choice of node.choices">
          <button class="pure-button" (click)="changeNode(choice.id)">{{choice.text}}</button>
        </li>
      </ul>
      <p class="retry" *ngIf="node.terminus">
        <button class="pure-button" (click)="reload()">Retry</button>
      </p>
    </section>
  `,
  styles: [`
    .graphic {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    ul.choices {
      list-style-type: none;
      padding: 0;
    }
    ul.choices li.choice {
      text-align: center;
      margin-bottom: .25rem;
    }
  `]
})
export class Branching implements OnInit {

  @Input() data: any;

  branchingData: any;

  node: any;

  constructor() {}

  ngOnInit() {
    this.branchingData = this.data;
    this.node = this.branchingData[0];
  }

  changeNode(id: number) {
    this.node = this.branchingData.find((value) => {
      return value.id == id;
    });
  }

  reload() {
    location.reload();
  }

}
@NgModule({
  imports: [CommonModule],
  exports: [Branching],
  declarations: [Branching]
})
export class BranchingModule { }
