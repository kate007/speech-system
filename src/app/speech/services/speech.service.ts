import { Injectable } from '@angular/core';
import { Speech } from '../models/speech.model';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private author:string = 'Winston Churchill';
  speeches: Speech[] = [];

  counter:number = 0;
  constructor() { 
    this.addInitSpeeches();
  }

  addInitSpeeches()
  {   
  
    this.add(new Speech( 'Winston Churchill', 'You ask, what is our aim? I can answer in one word: Victory. Victory at all costs—Victory in spite of all terror—Victory, however long and hard the road may be, for without victory there is no survival.'));
    this.add(new Speech( 'Winston Churchill', '[The House of Lords] regards all our liberties and political rights as enjoyed and enjoyable only so long as they choose to let us go on having them. But once we touch reality, once we touch their interests and privileges - [kicks his platform] Out!'));
    this.add(new Speech( 'Winston Churchill', 'The great air battle which has been in progress over this Island for the last few weeks has recently attained a high intensity.'));
    this.add(new Speech( 'Winston Churchill', 'If at first all the States of Europe are not willing or able to join the Union, we must nevertheless proceed to assemble and combine those who will and those who can.'));
    this.add(new Speech( 'Winston Churchill', 'We shall go on to the end. We shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air...'));
    this.add(new Speech('Winston Churchill', 'he day may dawn when fair play, love for one’s fellow-men, respect for justice and freedom, will enable tormented generations to march forth serene and triumphant from the hideous epoch in which we have to dwell. Meanwhile, never flinch, never weary, never despair.'));
    this.add(new Speech('Winston Churchill', 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.'));
    this.add(new Speech('Winston Churchill', 'What General Weygand called the Battle of France is over. I expect that the Battle of Britain is about to begin..'));
    this.add(new Speech('Winston Churchill', 'It lies with the Government to satisfy the working classes that there is no justification...er... [long silence] It lies with the Government to satisfy the working classes that there is no justification...er... [long silence] It lies with the Government to satisfy the working classes that there is no justification...er... [long silence]  '));
  }
  getAll()
  {
    return this.speeches;
  }
  add( sp:Speech ):boolean
  {   
      sp.id = this.counter;              
      this.speeches.push(sp);          
      this.counter++;       
      return true;
  }

  delete(id:number):boolean
  { 
    let index =  this.getIndexFromId(id);
    if( index > -1 )
    {
      this.speeches.splice( index , 1);
      return true;
    } else {
      return false;
    }
  }

  update(sp:Speech):boolean
  {    
      let index =  this.getIndexFromId(sp.id);
      if( index > -1 )
      {
        this.speeches[ index ] = sp;
        return true;
      } else {
        return false;
      }
      
  }

  getLoggedInAuthor():string
  {
      return this.author;
  }
  private getIndexFromId(id:number)
  {
    return this.speeches.findIndex( x => x.id === id ); 
  }
  
}
