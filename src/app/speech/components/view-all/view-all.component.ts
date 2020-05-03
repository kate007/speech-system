import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { Speech } from '../../models/speech.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit, AfterViewInit {


  speechList: Speech[] = [];
  selectedSpeech:Speech;
  selectedIndex:number = 0;
  bgColor:string;
  
  constructor(private speechService:SpeechService, private route:ActivatedRoute, private renderer:Renderer2) { }

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

  ngAfterViewInit()
  {
    const element = this.renderer.selectRootElement('#speechList-' + (this.selectedIndex).toString(), true);
    element.scrollIntoView({ behavior: 'smooth' });
    //this.initScroll(0, this.selectedIndex);  
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

   
  initScroll( offset: number, id: number): void {
    const element = document.querySelector('#speechList-' + id.toString());
  
     // scroll the entry
     if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
      console.log(yCoordinate);
      const yOffset = -1 * offset;
      const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent); // check if edge because scrollTO to does not work on edge

      if (!isIEOrEdge) {
        console.log('scrollTo');
          window.scrollTo({
              top: 500, /* yCoordinate + yOffset, */
            behavior: 'smooth',
          });
       } else {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
        const scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY + yOffset);
          }
       }
    }
  }

}
