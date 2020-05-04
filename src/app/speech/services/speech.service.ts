import { Injectable } from '@angular/core';
import { Speech } from '../models/speech.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private author:string = 'Winston Churchill'; 
  speeches: Speech[] = [];
  editId:number = 0;
  counter:number = 0;
  constructor(private http:HttpClient) { 
    this.addInitSpeeches();
  }

  getJSON():Observable<Speech[]> {
     return this.http.get<Speech[]>("./assets/speeches.json");   
  }
  addInitSpeeches()
  {   
  
    this.getJSON().subscribe( data => {
      console.log( JSON.stringify(data));
        data.map( speechItem => {
           let newSpeechItem = new Speech();
           newSpeechItem.author = speechItem.author;
           newSpeechItem.date = speechItem.date;
           newSpeechItem.id = speechItem.id;
           newSpeechItem.keywords = speechItem.keywords;
           newSpeechItem.text = speechItem.text;           
           this.add(newSpeechItem);
        })
    
    });

    
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
