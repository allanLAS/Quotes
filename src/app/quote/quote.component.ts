import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=  [
    new Quote(1, 'I believe you can speak things into existence.', 'Jay Z',new Date(2018,1,2)),
    new Quote(2,"Don't be afraid to give up the good to go for the great.",'John D. Rockerfeller',new Date(2017,6,8)),
    new Quote(3,'Regardless of how it goes down, life goes on','Rick Ross',new Date(2019,1,12)),
    new Quote(4,'We make a living by what we get, but we make a life by what we give.','Winston Churchill',new Date(2019,2,19)),
    new Quote(5,'Study hard so that you can master technology, which allows us to master nature.','Che Guevara',new Date(2019,4,20)),
    new Quote(6,'The reason children accept discpline from their parents is because they know their parents love them.','Nipsey Hussle',new Date(2018,1,1)),
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
