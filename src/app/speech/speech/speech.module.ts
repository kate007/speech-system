import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from '../components/view-all/view-all.component';
import { RouterModule,Routes } from '@angular/router';
import { SpeechItemComponent } from '../components/speech-item/speech-item.component';
import { AddSpeechComponent } from '../components/add-speech/add-speech.component';
import { EditSpeechComponent } from '../components/edit-speech/edit-speech.component';
import { SearchSpeechComponent } from '../components/search-speech/search-speech.component';


const routes:Routes = [ 
  {
    path:'view-all', 
    component: ViewAllComponent
  },
  {
    path:'add-speech', 
    component: AddSpeechComponent
  },
  {
    path:'edit-speech', 
    component: EditSpeechComponent
  },
  {
    path:'search-speech', 
    component: SearchSpeechComponent
  },

]

@NgModule({
  declarations: [
    ViewAllComponent,
    SpeechItemComponent,
    AddSpeechComponent,
    EditSpeechComponent,
    SearchSpeechComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ViewAllComponent,
    SpeechItemComponent,
    AddSpeechComponent,
    EditSpeechComponent,
    SearchSpeechComponent
  ]

})
export class SpeechModule { }
