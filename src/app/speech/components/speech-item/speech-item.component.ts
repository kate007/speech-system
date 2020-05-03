import { Component, OnInit, Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Speech } from  '../../models/speech.model';
@Component({
  selector: 'app-speech-item',
  templateUrl: './speech-item.component.html',
  styleUrls: ['./speech-item.component.css'],

})
export class SpeechItemComponent  {
  @Input() speechItem:Speech;
  @Input() listIndex:number;
  @Input() selected:boolean; //to change styles
  @Input() hovered:boolean;
  @Output() onItemClicked:EventEmitter<number>= new EventEmitter<number>();
  
  bgColor:string;
  constructor() { }


  onClicked()
  {    
    this.onItemClicked.emit(this.listIndex);
   
  }

  
}
