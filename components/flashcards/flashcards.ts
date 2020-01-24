import { NgModule, Component, OnInit, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-flashcards',
  template: `
    <div class="cardset-wrapper">
      <!-- Card -->
      <div class="cardset" [ngClass]="{'flip': card.flipped, 'show': showCard(i)}" *ngFor="let card of data.cards; let i = index;">
        <!-- Front -->
        <div class="card front" (click)="flipCard(i)">
          <div class="card-contents" [ngClass]="{'disable-centering': card.front.disableCentering}">
            <img *ngIf="card.front.imageUrl" [src]="card.front.imageUrl" [alt]="card.front.alt">
            <p *ngIf="card.front.text">
              <strong>{{card.front.text}}</strong>
            <p>
            <div *ngIf="card.front.html" [innerHtml]="card.front.html"></div>
          </div>
        </div>
        <!-- Back -->
        <div class="card back" (click)="flipCard(i)">
          <div class="card-contents" [ngClass]="{'disable-centering': card.back.disableCentering}">
            <img *ngIf="card.back.imageUrl" [src]="card.back.imageUrl" [alt]="card.back.alt">
            <p *ngIf="card.back.text">
              <strong>{{card.back.text}}</strong>
            </p>
            <div *ngIf="card.back.html" [innerHtml]="card.back.html"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Next/Prev Controls -->
    <div class="flashcard-controls" *ngIf="!data.graded">
      <p>
        {{data.cardNumber + 1}} of {{data.cards.length}}
      </p>
      <button value="previous card" aria-label="previous card" class="pure-button pure-button-primary previous" (click)="changeCard('prev')" [disabled]="firstCard()">
        &lsaquo;
      </button>
      <button value="next card" aria-label="next card" class="pure-button pure-button-primary next" (click)="changeCard('next')" [disabled]="lastCard()">
        &rsaquo;
      </button>
    </div>
  `,
  styles: [`
    @media screen and (min-width: 64em) {
        .pure-g.interactive {
            background: #efefef;
            padding: 1.5rem 0;
        }
    }

    div.cardset-wrapper {
        position: relative;
        margin: 1.5em auto;
        max-width: 42rem;
    }

    div.cardset-wrapper:after {
      content: "";
      display: table;
      clear: both;
    }

        div.flashcard-controls {
            text-align: center;
            margin-bottom: 1.5rem;
        }

        div.cardset {
            width: 100%;
            height: 24rem;
            float: left;
            display: none;
            position: relative;
            box-sizing: border-box;
            -webkit-perspective: 960px;
            perspective: 960px;
            -webkit-transition: all .5s ease;
            transition: all .5s ease;
            -webkit-tap-highlight-color: transparent;
        }

        div.cardset.show {
          display: block;
        }

        div.cardset:hover {
            cursor: pointer;
            -webkit-transition: all .5s ease;
            transition: all .5s ease;
        }

            div.cardset div.card {
                padding: 1.5em;
                left: 0;
                top: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                display: block;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                background-color: transparent;
                background: #fff;
                box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.26);
                overflow-y: auto;
                box-sizing: border-box;
            }

            div.cardset div.card.front {
                z-index:1000;
                -ms-transform: rotateX(0deg) rotateY(0deg);
                -webkit-transform: rotateX(0deg) rotateY(0deg);
                transform: rotateX(0deg) rotateY(0deg);
                -webkit-transform-style: preserve-3d;
                -ms-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
            }

            div.cardset.flip div.card.front {
                z-index: 800;
                -ms-transform: rotateY(180deg);
                -webkit-transform: rotateY(180deg);
                transform: rotateY(180deg);
            }

            div.cardset div.card.back {
              opacity: 0;
              background-image:
                linear-gradient(
                  180deg, white 3rem,
                  #F0A4A4 calc(3rem),
                  #F0A4A4 calc(3rem + 2px),
                  transparent 1px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 1.5rem,
                  #DDD 1px,
                  #DDD calc(1.5rem + 1px)
                );
              box-shadow: 1px 1px 3px rgba(0,0,0,.25);
              background-size: auto 100%;
              background-attachment: local;
              z-index: 800;
              -ms-transform: rotateY(-180deg);
              -webkit-transform: rotateY(-180deg);
              transform: rotateY(-180deg);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              -webkit-transition: all .3s ease-in-out;
              transition: all .3s ease-in-out;
            }

            div.cardset.flip div.card.back {
                opacity: 1;
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
                z-index: 1000;
                -ms-transform: rotateX(0deg) rotateY(0deg);
                -webkit-transform: rotateX(0deg) rotateY(0deg);
                transform: rotateX(0deg) rotateY(0deg);
            }

                div.cardset div.card div.card-contents {
                    position: relative;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                }

                div.cardset div.card div.card-contents.disable-centering {
                    text-align: left;
                    top: 0%;
                    -webkit-transform: none;
                    -ms-transform: none;
                    transform: none;
                }

                    div.cardset div.card div.card-contents img {
                        position: relative;
                        max-height: 16rem;
                    }

                div.cardset div.card div.card-contents > *:first-child {
                    margin-top: 0;
                }
  `]
})
export class Flashcards implements OnInit {

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if(event.code === 'BracketRight') {
      this.changeCard('next');
    }
    if(event.code === 'BracketLeft') {
      this.changeCard('prev');
    }
    if(event.code === 'KeyF') {
      this.flipCard(this.flashcardsData.cardNumber);
    }
  }

  @Input() data: any;

  flashcardsData: any;

  constructor( ) { }

  ngOnInit() {
    this.initialize();    
  }
  
  changeCard(direction: string) {
    this.flashcardsData.cards[this.flashcardsData.cardNumber].flipped = false;
    if (
      direction === 'next' &&
      this.flashcardsData.cardNumber < this.flashcardsData.cards.length - 1
    ) {
      this.flashcardsData.cardNumber++;
    } else if (
      direction === 'prev' &&
      this.flashcardsData.cardNumber > 0) {
      this.flashcardsData.cardNumber--;
    }
  }

  firstCard() {
    if (this.flashcardsData.cardNumber === 0) {
      return true;
    }
  }

  flipCard(index: number) {
    this.flashcardsData.cards[index].flipped = !this.flashcardsData.cards[index].flipped;
  }

  lastCard() {
    if (this.flashcardsData.cardNumber === this.flashcardsData.cards.length - 1) {
      return true;
    }
  }

  initialize() {
    this.flashcardsData = this.data;
    this.flashcardsData.cardNumber = 0;
    this.shuffleCards();
  }

  showCard(index: number) {
    if (this.flashcardsData.cardNumber === index) {
      return true;
    }
  }

  shuffle(sourceArray: any) {
    for (let n = 0; n < sourceArray.length - 1; n++) {
      let k = n + Math.floor(Math.random() * (sourceArray.length - n));
      let temp = sourceArray[k];
      sourceArray[k] = sourceArray[n];
      sourceArray[n] = temp;
    }
  }

  shuffleCards() {
    if(this.flashcardsData.shuffle) {
      this.shuffle(this.flashcardsData.cards);
    }
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [Flashcards],
  declarations: [Flashcards]
})
export class FlashcardsModule { }