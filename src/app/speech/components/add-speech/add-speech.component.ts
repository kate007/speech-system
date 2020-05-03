import { Component, OnInit, ViewChild, TemplateRef, ElementRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SpeechService } from '../../services/speech.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Speech } from  '../../models/speech.model';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-speech',
  templateUrl: './add-speech.component.html',
  styleUrls: ['./add-speech.component.css']
})
export class AddSpeechComponent implements OnInit {

  @ViewChild('speechText', {static: false}) speechText: ElementRef;
  @ViewChild('dialog', {static: false}) dialog: ElementRef;
  modalRef: BsModalRef;
  today = new Date();
  addSuccess:boolean; 
  alert: any;
  author:string = '';

  constructor(private speechService:SpeechService, private modalService: BsModalService) {  

  }
  ngOnInit()
  {
    this.author = this.speechService.getLoggedInAuthor();
  }

  onSubmit(form:FormGroup) {


    let value = form.value;
    let speech: Speech = new Speech( value.author, value.text);
    if( value.keywords )
    {
        speech.keywords = value.keywords;
    }
    if( value.speechDate  )
    {
        speech.date = value.speechDate;
    }

    this.addSuccess = this.speechService.add(speech);
    if( this.addSuccess ) {

    
      this.addAlert('success', 'Speech successfully added.');               
    
    } else {
      this.addAlert('danger', 'There was an error in updating.');
    }

   
    this.resetForm(form);
} 


addAlert(type:string, msg:string): void {   
  this.alert = {
    type: type,
    msg: msg,
    timeout: 3000
  };

}



resetForm(form:FormGroup)
{
    form.reset({ 'speech-author': this.author, 'speechDate': this.today });
} 

clearForm(form:FormGroup, event:any)
{    
   this.alert = null;
   this.resetForm(form);
}

}

