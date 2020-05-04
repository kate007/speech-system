import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { SpeechService } from '../../services/speech.service';
import { Speech } from '../../models/speech.model';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),
      state('out', style({opacity: 0})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ViewAllComponent implements OnInit, AfterViewInit {

  speechList$:Observable<Speech[]>;
  speechList: Speech[] = [];
  selectedSpeech:Speech;
  selectedIndex:number = 0;
  bgColor:string;
  prevIndex:number = 0;
  speeches$: Observable<Speech[]>;
  
  constructor(private speechService:SpeechService, private route:ActivatedRoute, private renderer:Renderer2) { 

  }

  ngOnInit() {            
    this.selectedIndex = +this.route.snapshot.params.id || 0 ;    
  
    this.speechService._speechesSubj.subscribe( speeches =>  { 
      this.speechList = this.speechService.getAll();
      if(this.speechList)
      {
        if( this.speechList[this.selectedIndex] )
        {
           this.selectedSpeech = this.speechList[this.selectedIndex];  
        } else {
           this.selectedIndex = 0;      
           this.selectedSpeech = this.speechList[0];  
        }   
        this.setSelectedIndex(this.selectedIndex);      
      } 
     
    });
    
 
  }

  ngAfterViewInit()
  {  
  
    if(this.renderer.selectRootElement('#speechList-' + (this.selectedIndex).toString(), true))
    {
      const element = this.renderer.selectRootElement('#speechList-' + (this.selectedIndex).toString(), true);
      element.scrollIntoView({ behavior: 'smooth' });
    }
      
  }

  setSelectedIndex(i:number )
  {
    this.prevIndex = this.selectedIndex;
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
