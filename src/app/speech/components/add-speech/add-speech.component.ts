import { Component, OnInit, ViewChild, TemplateRef, ElementRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SpeechService } from '../../services/speech.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Speech } from  '../../models/speech.model';

@Component({
  selector: 'app-add-speech',
  templateUrl: './add-speech.component.html',
  styleUrls: ['./add-speech.component.css']
})
export class AddSpeechComponent {

  @ViewChild('speechText', {static: false}) speechText: ElementRef;
  @ViewChild('dialog', {static: false}) dialog: ElementRef;
  modalRef: BsModalRef;
  today = new Date();
  addSuccess:boolean; 
  alerts: any[] = [];
  constructor(private speechService:SpeechService, private modalService: BsModalService) { }

  onSubmit(value:any) {
  
    let speech: Speech = new Speech( this.speechService.author, value.text);
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
} 

addAlert(type:string, msg:string): void {   
  this.alerts.push({
    type: type,
    msg: msg,
    timeout: 3000
  });
}


expand(template: TemplateRef<any>)
{
  console.log(this.speechText);
 // console.log(this.speechText.nativeElement.value); 
 this.modalRef = this.modalService.show(template);
}

onClosed(dismissedAlert: AlertComponent): void {
  this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
}


}

