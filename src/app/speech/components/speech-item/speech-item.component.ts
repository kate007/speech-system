import { Component, OnInit, Input } from '@angular/core';
import { Speech } from  '../../models/speech.model';
@Component({
  selector: 'app-speech-item',
  templateUrl: './speech-item.component.html',
  styleUrls: ['./speech-item.component.css']
})
export class SpeechItemComponent  {
  @Input() speechItem:Speech;
  @Input() listIndex:number;
  constructor() { }

}
