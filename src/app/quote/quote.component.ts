import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=  [
    new Quote(1, 'It’s not about ideas. It’s about making ideas happen.', 'Omosh the Geek',new Date(2018,3,14)),
    new Quote(2,'The most courageous act is still to think for yourself. Aloud.','Apolo Mboya',new Date(2016,6,9)),
    new Quote(3,'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.','Bazenga Wanumbernane',new Date(2007,1,12)),
    new Quote(4,'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.','Wise Foolness',new Date(2019,0,18)),
    new Quote(5,'One does not discover new lands without consenting to lose sight of the shore for a very long time.','Odhiambo Mapesa',new Date(2019,2,14)),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quote= quote.quote;
    quote.description= quote.description;
    quote.postDate = new Date();
    this.quotes.unshift(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
