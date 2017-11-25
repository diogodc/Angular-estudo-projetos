import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { MessagesComponent } from './messages/messages.component'; //adicionado messages!
import { HeroService } from './hero.service.ts'; //adicionado messages!
import { MessageService } from './message.service.ts';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService, MessageService ], // add aqui o serviço!
  bootstrap: [AppComponent]
})
export class AppModule { }