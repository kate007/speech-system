import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { RouterModule,Routes } from '@angular/router';
import { SpeechItemComponent } from './components/speech-item/speech-item.component';
import { AddSpeechComponent } from './components/add-speech/add-speech.component';
import { EditSpeechComponent } from './components/edit-speech/edit-speech.component';
import { SearchSpeechComponent } from './components/search-speech/search-speech.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './components/pipes/filter.pipe';

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
    SearchSpeechComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),   
    FormsModule
  ],
  exports:[
    ViewAllComponent,
    SpeechItemComponent,
    AddSpeechComponent,
    EditSpeechComponent,
    SearchSpeechComponent,
    AlertModule,
    ModalModule,
    BsDatepickerModule,
    FormsModule
  ]

})
export class SpeechModule { }
