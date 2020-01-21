import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  public up = 0;
  public down = 0;

@Input() quote: Quote;
@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}

onClick(){
  
  this.up++;
}
voteDown(){
  this.down++;
}

  constructor() { }

  ngOnInit() {
  }

}
