import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { Speech } from '../../models/speech.model';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  speechList: Speech[] = [];
  selectedSpeech:Speech;
  selectedIndex:number = 0;
  constructor(private speechService:SpeechService) { }

  ngOnInit() {                                      
    this.speechList = this.speechService.getAll();   
    this.selectedSpeech = this.speechList[this.selectedIndex];     
  }

  setSelectedIndex(i:number)
  {
    this.selectedIndex = i;
    this.setSelectedSpeech(this.selectedIndex);
  }

  setSelectedSpeech(i:number)
  {
    this.selectedSpeech = this.speechList[this.selectedIndex];
  }

  onEditSpeechResultChange(valueEmitted:string)
  {     
    this.speechList = this.speechService.getAll();
    if( valueEmitted == 'deleted')
    {
      this.setSelectedIndex(0);
    }  
  }
}
