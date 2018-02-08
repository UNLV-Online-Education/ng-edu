import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-branching',
  template: `
    <section>
      <div>
        <h4 *ngIf="node.data.title">{{node.data.title}}</h4>
        <img *ngIf="node.data.image" class="graphic" [src]="node.data.image" [alt]="node.data.alt">
        <p *ngIf="node.data.text">{{node.data.text}}</p>
        <div *ngIf="node.data.html" [innerHtml]="node.data.html"></div>
      </div>
      <ul *ngIf="node.choices" class="choices">
        <li class="choice" *ngFor="let choice of node.choices">
          <button class="pure-button" (click)="changeNode(choice.id)">{{choice.text}}</button>
        </li>
      </ul>
      <p *ngIf="node.retry" class="retry">
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
    this.node = this.branchingData.find((value: any) => {
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
