import { Component, OnInit } from '@angular/core';
import { Speech } from '../../models/speech.model';
import { SpeechService } from '../../services/speech.service';

@Component({
  selector: 'app-search-speech',
  templateUrl: './search-speech.component.html',
  styleUrls: ['./search-speech.component.css']
})
export class SearchSpeechComponent implements OnInit {

  speechList: Speech[] = [];
  searchText:string = '';
  constructor(private speechService:SpeechService ) { }

  ngOnInit() {
    this.speechList = this.speechService.getAll();
      
  }

}
