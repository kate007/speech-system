import { Injectable } from '@angular/core';
import { Speech } from '../models/speech.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private author:string = 'Winston Churchill'; 
  public _speechesSubj = new BehaviorSubject<Speech[]>([]);
 
  speeches: Speech[] = [];
  editId:number = 0;
  counter:number = 0;
  constructor(private http:HttpClient) { 
    this.getAllSpeeches();
  }

  getJSON():Observable<Speech[]> {
     return this.http.get<Speech[]>("./assets/speeches.json");   
  }
  getAllSpeeches()
  {   
  
      this.getJSON().subscribe( data => {
   
        data.map( speechItem => {
           let newSpeechItem = new Speech();
           newSpeechItem.author = speechItem.author;
           newSpeechItem.date =  speechItem.date;
           newSpeechItem.id = speechItem.id;
           newSpeechItem.keywords = speechItem.keywords;
           newSpeechItem.text = speechItem.text;           
           this.add(newSpeechItem);
           
        })

        this._speechesSubj.next(this.speeches);
     });
    
  }

  getList()
  {
    return 
  }
 
  getAll()
  {
    return this.speeches;
  }
  add( sp:Speech ):boolean
  {   
      sp.author = this.author;
      sp.id = this.counter;              
      this.speeches.push(sp);          
      this.counter++;       
      this._speechesSubj.next(Object.assign({}, this.speeches) );
      return true;
  }

  delete(id:number):boolean
  { 
    let index =  this.getIndexFromId(id);
    if( index > -1 )
    {
      this.speeches.splice( index , 1);
      this._speechesSubj.next(Object.assign({}, this.speeches) );
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
        this._speechesSubj.next(Object.assign({}, this.speeches) );
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
