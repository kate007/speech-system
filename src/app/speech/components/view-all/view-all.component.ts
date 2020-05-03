import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { Speech } from '../../models/speech.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {


  speechList: Speech[] = [];
  selectedSpeech:Speech;
  selectedIndex:number = 0;
  bgColor:string;
  
  constructor(private speechService:SpeechService, private route:ActivatedRoute) { }

  ngOnInit() {                                      
    this.selectedIndex = +this.route.snapshot.params.id || 0 ;     
    this.speechList = this.speechService.getAll();   
    if( this.speechList[this.selectedIndex] )
    {
       this.selectedSpeech = this.speechList[this.selectedIndex];  
    } else {
        this.selectedIndex = 0;
    }   
  }

  setSelectedIndex(i:number )
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
