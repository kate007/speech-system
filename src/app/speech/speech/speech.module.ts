import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from '../components/view-all/view-all.component';
import { RouterModule,Routes } from '@angular/router';
import { SpeechItemComponent } from '../components/speech-item/speech-item.component';
import { AddSpeechComponent } from '../components/add-speech/add-speech.component';
import { EditSpeechComponent } from '../components/edit-speech/edit-speech.component';


const routes:Routes = [ 
  {
    path:'view-all', 
    component: ViewAllComponent
  }

]

@NgModule({
  declarations: [
    ViewAllComponent,
    SpeechItemComponent,
    AddSpeechComponent,
    EditSpeechComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ViewAllComponent,
    SpeechItemComponent,
    AddSpeechComponent,
    EditSpeechComponent
  ]

})
export class SpeechModule { }
