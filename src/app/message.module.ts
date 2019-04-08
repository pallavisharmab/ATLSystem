import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    MessagesComponent
  ]
})
export class MessageModule { }
