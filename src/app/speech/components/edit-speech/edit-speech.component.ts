import { Component, OnInit, Input, TemplateRef, Output, EventEmitter  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SpeechService } from '../../services/speech.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { Speech } from  '../../models/speech.model';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './edit-speech.component.html',
  styleUrls: ['./edit-speech.component.css']
})
export class EditSpeechComponent implements OnInit {

  @Input() mySpeech:Speech;
  @Output()  speechListChanged: EventEmitter<string> = new EventEmitter<string>();
  modalRef: BsModalRef;
  alert: any;

  constructor(private speechService:SpeechService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onSubmit(value:any) {
    
    let speech: Speech = new Speech( value.author, value.text);
    if( value.keywords )
    {
        speech.keywords = value.keywords;
    }
    if( value.speechDate  )
    {
        speech.date = value.speechDate;
    }      

   let success:boolean = this.speechService.update(this.mySpeech);
   if( success ) {
     this.addAlert('success', 'Speech successfully updated.');
     this.speechListChanged.emit('updated');
   
   } else {
     this.addAlert('danger', 'There was an error in updating.');
   }

 } 
 addAlert(type:string, msg:string): void {   
  this.alert = {
    type: type,
    msg: msg,
    timeout: 3000
  };
}

 delete()
 {
   let success:boolean = this.speechService.delete(this.mySpeech.id);
   if( success ) {
     this.addAlert('success', 'Speech successfully deleted.');
     this.speechListChanged.emit('deleted');
   } else {
     this.addAlert('danger', 'There was an error in deleting.');
   }

 }

 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);


}

confirmDelete(){
  
  let success:boolean = this.speechService.delete(this.mySpeech.id);
  if( success ) {
    this.addAlert('success', 'Speech successfully deleted.');
    this.speechListChanged.emit('deleted');
    this.modalRef.hide();
  } else {
    this.addAlert('danger', 'There was an error in deleting.');
    this.modalRef.hide();
  }
  
 
}

}
