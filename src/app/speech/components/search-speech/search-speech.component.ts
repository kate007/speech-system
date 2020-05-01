import { Component, OnInit } from '@angular/core';
import { Speech } from '../../models/speech.model';
import { SpeechService } from '../../services/speech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-speech',
  templateUrl: './search-speech.component.html',
  styleUrls: ['./search-speech.component.css']
})
export class SearchSpeechComponent implements OnInit {
  focus;
  speechList: Speech[] = [];
  searchText:string = '';
  constructor(private speechService:SpeechService, private router:Router ) { }

  ngOnInit() {
    this.speechList = this.speechService.getAll();      
  }

}
